// import AuthForm from "./components/AuthForm";

import AuthForm from "../../components/Form";
import { loginSchema } from "../../validations/authValidation";
const LoginForm = () => {
  const handleLogin = (data) => {
    console.log("Login Data:", data);
    // Add your login logic here
  };

  return (
    <div className="max-w-md mx-auto">
    <AuthForm
      heading="Login"
      onSubmit={handleLogin}
      submitText="Login"
      validationSchema={loginSchema}
      fields={[
        {
          name: "email",
          label: "Email",
          placeholder: "Enter your email",
          type: "email",
          validation: { required: "Email is required" },
        },
        {
          name: "password",
          label: "Password",
          placeholder: "Enter your password",
          type: "password",
          validation: { required: "Password is required" },
        },
      ]}
      extraLinks={[
        {
          label: "Don't have an account?",
          to: "/register",
          text: "Register",
        },
        {
          label: "Forgot your password?",
          to: "/forgot-password",
          text: "Reset it",
        },
    ]}
    />
     {/* Social Login Buttons BELOW the form */}
      <div className="mt-6 space-y-3 text-center">
        <p className="text-[rgb(var(--text-primary))]  text-sm">Or</p>

        <button className="w-full border py-2 rounded btn-outline font-medium">
          Continue with Google
        </button>

        <button className="w-full border py-2 rounded btn-outline font-medium">
          Continue with GitHub
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
