import React from "react";
import { AlertCircle, Clock, Mail } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface VerificationExpiredPageProps {
  onResendEmail?: () => void;
  onBackToLogin?: () => void;
}

export const VerificationExpiredPage: React.FC<
  VerificationExpiredPageProps
> = ({ onResendEmail, onBackToLogin }) => {
  return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="shadow-xl border-border/50">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-destructive" />
              </div>
              <CardTitle className="text-foreground">
                Verification link expired
              </CardTitle>
              <CardDescription>
                This link has expired or is no longer valid
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert className="bg-destructive/5 border-destructive/20">
                <AlertDescription className="text-muted-foreground">
                  <div className="flex items-start space-x-2">
                    <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-destructive" />
                    <div>
                      <p className="font-medium text-foreground">
                        Link has expired
                      </p>
                      <p className="text-sm mt-1">
                        Verification links expire after 24 hours for security
                        reasons.
                      </p>
                    </div>
                  </div>
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                <Button onClick={onResendEmail} className="w-full" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Send new verification email
                </Button>

                <Button
                  onClick={onBackToLogin}
                  variant="outline"
                  className="w-full"
                >
                  Back to login
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  );
};
