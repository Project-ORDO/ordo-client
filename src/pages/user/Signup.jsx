import AuthForm from "../../components/Form";
import { signupSchema } from "../../validations/authValidation";

const SignupForm = () => {
  const handleSignup = (data) => {
    console.log("Signup Data:", data);
    // You can add validation or API calls later here
  };

  return (
    <div className="max-w-md mx-auto">
      <AuthForm
        heading="Sign Up"
        onSubmit={handleSignup}
        submitText="Sign Up"
        validationSchema={signupSchema}
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

export default SignupPage;
