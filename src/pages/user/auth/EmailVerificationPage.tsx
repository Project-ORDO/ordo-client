import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface EmailVerificationPageProps {
  onVerifyToken?: (token: string) => Promise<{ success: boolean; message?: string }>;
}

export const EmailVerificationPage: React.FC<EmailVerificationPageProps> = ({
  onVerifyToken
}) => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setStatus('error');
        setMessage('Invalid verification link');
        return;
      }

      try {
        const result = await onVerifyToken?.(token);
        if (result?.success) {
          setStatus('success');
          // Redirect after 2 seconds
          setTimeout(() => navigate('/dashboard'), 2000);
        } else {
          setStatus('error');
          setMessage(result?.message || 'Verification failed');
        }
      } catch {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    };

    verifyToken();
  }, [token, onVerifyToken, navigate]);

  const renderContent = () => {
    switch (status) {
      case 'verifying':
        return (
          <>
            <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <RefreshCw className="w-8 h-8 text-primary animate-spin" />
            </div>
            <CardTitle className="text-foreground">Verifying your email...</CardTitle>
            <CardDescription>Please wait while we verify your email address</CardDescription>
          </>
        );
      case 'success':
        return (
          <>
            <div className="mx-auto mb-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <CardTitle className="text-foreground">Email verified successfully!</CardTitle>
            <CardDescription>Redirecting you to the dashboard...</CardDescription>
          </>
        );
      case 'error':
        return (
          <>
            <div className="mx-auto mb-4 w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-destructive" />
            </div>
            <CardTitle className="text-foreground">Verification failed</CardTitle>
            <CardDescription className="text-destructive">{message}</CardDescription>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-border/50">
          <CardHeader className="text-center">
            {renderContent()}
          </CardHeader>
          {status === 'error' && (
            <CardContent className="text-center">
              <Button onClick={() => navigate('/auth/resend-verification')}>
                Request new verification email
              </Button>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};