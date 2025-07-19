// import AuthForm from "./components/AuthForm";

import AuthForm from "../../components/Form";

const LoginPage = () => {
  const handleLogin = (data) => {
    console.log("Login Data:", data);
    // Add your login logic here
  };

  return (
    <AuthForm
      heading="Login to Your Account"
      onSubmit={handleLogin}
      submitText="Login"
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
  );
};

export default LoginPage;
