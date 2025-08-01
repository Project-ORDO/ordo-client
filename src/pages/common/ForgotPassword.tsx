import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);

    // TODO: call API to send reset link
    console.log("Password reset requested for:", email);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg border rounded-xl">
        <CardContent className="p-8">
          <h1 className="text-2xl font-semibold text-center mb-2">Forgot your password?</h1>
          <p className="text-gray-500 text-center mb-6 text-sm">
            Enter your email address and we’ll send you a link to reset your password.
          </p>

          {submitted ? (
            <div className="text-green-600 text-center">
             If the email exists, we’ve sent a password reset link.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="text-red-500 text-xs">{error}</p>}
              </div>
              <Button type="submit" className="w-full">
                Send reset link
              </Button>
            </form>
          )}

          <p className="mt-6 text-center text-sm text-gray-500">
            Remember your password?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Back to login
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
