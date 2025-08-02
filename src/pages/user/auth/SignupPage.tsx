import { useForm } from "react-hook-form"
import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Github, Mail } from "lucide-react"
import { yupResolver } from "@hookform/resolvers/yup"
import type { InferType } from "yup"
import { signupSchema } from "@/validation/authValidation"
import { Link } from "react-router-dom";


export function SignupForm() {
    type SignupFormData = InferType<typeof signupSchema>;

    const form = useForm<SignupFormData>({
        resolver: yupResolver(signupSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

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
            <div className="space-y-3 mb-6">
                <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 rounded-[var(--radius-md)]"
                    onClick={() => handleOAuthSignup("google")}
                >
                    <Mail className="w-4 h-4" />
                    Sign up with Google
                </Button>
                <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 rounded-[var(--radius-md)]"
                    onClick={() => handleOAuthSignup("github")}
                >
                    <Github className="w-4 h-4" />
                    Sign up with GitHub
                </Button>
            </div>

            {/* Divider */}
            <div className="text-center text-sm text-muted-foreground mb-4">or</div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                    {/* Username */}
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <Label htmlFor="username">Username</Label>
                                <FormControl>
                                    <Input
                                        id="username"
                                        placeholder="Enter your username"
                                        {...field}
                                        className="bg-[var(--color-input)] rounded-[var(--radius-md)]"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Email */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <Label htmlFor="email">Email</Label>
                                <FormControl>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        {...field}
                                        className="bg-[var(--color-input)] rounded-[var(--radius-md)]"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Password */}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <Label htmlFor="password">Password</Label>
                                <FormControl>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="••••••••"
                                        {...field}
                                        className="bg-[var(--color-input)] rounded-[var(--radius-md)]"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Confirm Password */}
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <Label htmlFor="confirmPassword">Confirm Password</Label>
                                <FormControl>
                                    <Input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="••••••••"
                                        {...field}
                                        className="bg-[var(--color-input)] rounded-[var(--radius-md)]"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <Button type="submit" className="w-full rounded-[var(--radius-md)]">
                        Sign Up
                    </Button>
                </form>
            </Form>
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
