import type { InferType } from "yup"
import { signupSchema } from "@/validation/authValidation"
import { Link } from "react-router-dom";
import OAuthButtons from "@/components/auth/OAuthButtons"
import { ReusableForm, type FieldConfig } from "@/components/common/Form"

type SignupFormInputs = InferType<typeof signupSchema>;

const signupFields = [
    {
        name: "username",
        label: "Username",
        placeholder: "Enter your username",
        autoComplete: "username",
    },
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
        autoComplete: "new-password",
    },
    {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        placeholder: "Confirm your password",
        autoComplete: "new-password",
    },
] satisfies FieldConfig<{ email: string; password: string, confirmPassword: string, username: string }>[];


export function SignupForm() {
    type SignupFormData = InferType<typeof signupSchema>;


    function onSubmit(values: SignupFormData) {
        console.log("Signup values:", values)
        // Handle signup logic here
    }

    function handleOAuthSignup(provider: "google" | "github") {
        console.log(`Signup with ${provider}`)
        // Handle OAuth signup
    }

    return (
        <div className="max-w-sm mx-auto mt-10 px-4 py-6 rounded-[var(--radius-md)] shadow-md border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-card-foreground)]">
            <h2 className="text-xl font-semibold mb-6 text-center">Create Account</h2>

            {/* OAuth Buttons */}
            <OAuthButtons
                onGoogleLogin={() => handleOAuthSignup("google")}
                onGitHubLogin={() => handleOAuthSignup("github")}
            />

            {/* Divider */}
            <div className="text-center text-sm text-muted-foreground mb-4">or</div>

            <ReusableForm<SignupFormInputs>
                onSubmit={onSubmit}
                fields={signupFields}
                submitText="Signup"
                schema={signupSchema}
            />
            <p
                style={{
                    textAlign: "center",
                    marginTop: "1rem",
                    color: "var(--color-muted-foreground)"
                }}
            >
                Already have an account?{" "}
                <Link
                    to="/login"
                    style={{ color: "var(--color-primary)", fontWeight: "bold" }}
                >
                    Login
                </Link>
            </p>
        </div>
    )
}
