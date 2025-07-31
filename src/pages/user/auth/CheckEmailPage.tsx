import React, { useState, useEffect } from "react";
import { Mail, Clock, RefreshCw } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface CheckEmailPageProps {
  email?: string;
  onResendEmail?: () => Promise<void>;
//   onContinue?: () => void;
  onChangeEmail?: () => void;
}

export const CheckEmailPage: React.FC<CheckEmailPageProps> = ({
  email = "user@example.com",
  onResendEmail,
//   onContinue,
  onChangeEmail,
}) => {
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleResendEmail = async () => {
    if (countdown > 0 || isResending) return;

    setIsResending(true);
    try {
      await onResendEmail?.();
      setCountdown(60);
    } catch (error) {
      console.error("Failed to resend email:", error);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-border/50">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-foreground">Check your email</CardTitle>
            <CardDescription>
              We've sent a verification link to{" "}
              <strong className="text-foreground">{email}</strong>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="bg-primary/5 border-primary/20">
              <AlertDescription className="text-muted-foreground">
                <div className="flex items-start space-x-2">
                  <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">
                      Link expires in 24 hours
                    </p>
                    <p className="text-sm mt-1">
                      Don't forget to check your spam folder if you don't see
                      the email.
                    </p>
                  </div>
                </div>
              </AlertDescription>
            </Alert>

            <div className="space-y-3">
              <Button
                onClick={handleResendEmail}
                disabled={countdown > 0 || isResending}
                variant="default"
                className="w-full"
              >
                {isResending ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : countdown > 0 ? (
                  `Resend in ${countdown}s`
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Resend verification email
                  </>
                )}
              </Button>

              {/* <Button onClick={onContinue} className="w-full">
                Check Verification
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button> */}
            </div>

            <div className="text-center text-sm text-muted-foreground">
              Wrong email?
              <Button
                variant={"link"}
                onClick={onChangeEmail}
              >Back to Signup
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
