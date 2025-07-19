import AuthForm from "../../components/Form";

const SignupPage = () => {
  const handleSignup = (data) => {
    console.log("Signup Data:", data);
    // You can add validation or API calls later here
  };

  return (
    <AuthForm
      heading="Sign Up"
      onSubmit={handleSignup}
      submitText="Sign Up"
      fields={[
        {
          name: "username",
          label: "Username",
          placeholder: "Enter your username",
          type: "text",
        },
        {
          name: "email",
          label: "Email",
          placeholder: "Enter your email",
          type: "email",
        },
        {
          name: "password",
          label: "Password",
          placeholder: "Enter your password",
          type: "password",
        },
        {
          name: "confirmPassword",
          label: "Confirm Password",
          placeholder: "Re-enter your password",
          type: "password",
        },
      ]}
      extraLinks={[
        {
          label: "Already have an account?",
          to: "/login",
          text: "Login",
        },
      ]}
    />
  );
};

export default SignupPage;
