import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { yupResolver } from "@hookform/resolvers/yup"
// import { InferType } from "yup"
import type { InferType } from "yup"



import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Github, Mail } from "lucide-react"
import { loginSchema } from "@/validation/authValidation"


export function LoginForm() {
    type LoginFormData = InferType<typeof loginSchema>;

const form = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

function onSubmit(values: LoginFormData) {
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
      <div className="space-y-3 mb-6">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2 rounded-[var(--radius-md)]"
          onClick={() => handleOAuthLogin("google")}
        >
          <Mail className="w-4 h-4" />
          Continue with Google
        </Button>
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2 rounded-[var(--radius-md)]"
          onClick={() => handleOAuthLogin("github")}
        >
          <Github className="w-4 h-4" />
          Continue with GitHub
        </Button>
      </div>

      {/* Divider */}
      <div className="text-center text-sm text-muted-foreground mb-4">or</div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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

          {/* Submit */}
          <Button type="submit" className="w-full rounded-[var(--radius-md)]">
            Login
          </Button>
        </form>
      </Form>
    </div>
  )
}
