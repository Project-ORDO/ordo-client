import React, { useEffect } from 'react';
import { CheckCircle, Shield, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface VerificationSuccessPageProps {
  userName?: string;
  onContinue?: () => void;
  redirectDelay?: number;
}

export const VerificationSuccessPage: React.FC<VerificationSuccessPageProps> = ({
  userName,
  onContinue,
  redirectDelay = 0
}) => {
  useEffect(() => {
    if (redirectDelay > 0) {
      const timer = setTimeout(() => {
        onContinue?.();
      }, redirectDelay * 1000);
      return () => clearTimeout(timer);
    }
  }, [redirectDelay, onContinue]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-border/50">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <CardTitle className="text-foreground">
              {userName ? `Welcome ${userName}!` : 'Email verified!'}
            </CardTitle>
            <CardDescription>
              Your account has been successfully verified
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="bg-accent/5 border-accent/20">
              <AlertDescription className="text-muted-foreground">
                <div className="flex items-start space-x-2">
                  <Shield className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Account secured</p>
                    <p className="text-sm mt-1">You now have full access to all Ordo features.</p>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
            
            <Button onClick={onContinue} className="w-full" size="lg">
              Continue to Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              Welcome to <strong className="text-primary">Ordo</strong>! Let's get you started.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};