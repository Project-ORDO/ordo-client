import type { InferType } from "yup"
import { Link } from "react-router-dom";
import { type FieldConfig } from "@/components/common/Form"
import { loginSchema } from "@/validation/authValidation"
import OAuthButtons from "@/components/auth/OAuthButtons"
import { ReusableForm } from "@/components/common/Form"
type LoginFormInputs = InferType<typeof loginSchema>;
const fields = [
    {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter your email",
        autoComplete: "email",
    },
    {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
        autoComplete: "current-password",
    },
] satisfies FieldConfig<{ email: string; password: string }>[];




export function LoginForm() {

    function onSubmit(values: LoginFormInputs) {
        console.log("Login values:", values)
        // Handle login logic here
    }

    function handleOAuthLogin(provider: "google" | "github") {
        console.log(`Login with ${provider}`)
        // Trigger your OAuth logic here
    }

    return (
        <div className="max-w-sm mx-auto mt-10 px-4 py-6 rounded-[var(--radius-md)] shadow-md border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-card-foreground)]">
            <h2 className="text-xl font-semibold mb-6 text-center">Login</h2>

            {/* OAuth Buttons */}
            <OAuthButtons
                onGoogleLogin={() => handleOAuthLogin("google")}
                onGitHubLogin={() => handleOAuthLogin("github")}
            />

            {/* Divider */}
            <div className="text-center text-sm text-muted-foreground mb-4">or</div>

            <ReusableForm<LoginFormInputs>
                onSubmit={onSubmit}
                fields={fields}
                submitText="Login"
                schema={loginSchema}
            />

            {/* Forgot Password link */}
            <div style={{ textAlign: "left", marginTop: "0.5rem" }}>
                <Link
                    to="/forgot-password"
                    style={{ color: "var(--color-primary)", fontWeight: "bold", fontSize: "0.9rem" }}
                >
                    Forgot Password?
                </Link>
            </div>

            <p
                style={{
                    textAlign: "left",
                    marginTop: "1rem",
                    color: "var(--color-muted-foreground)"
                }}
            >
                Don't have an account?{" "}
                <Link
                    to="/signup"
                    style={{ color: "var(--color-primary)", fontWeight: "bold" }}
                >
                    Sign up
                </Link>
            </p>
        </div>
    )
}
