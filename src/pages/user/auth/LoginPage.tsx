import { ReusableForm } from "@/components/common/Form";
export function LoginScreen() {
  // Handle form submit
  const handleLogin = (data: { email: string; password: string }) => {
    console.log("Login submitted:", data);
    // Add your login logic here (API call, validation, etc.)
  };

  // Define fields for login
  const loginFields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "your.email@example.com",
      validation: { required: "Email is required" },
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      validation: { required: "Password is required" },
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "var(--color-background)",
      }}
    >
      <div
        style={{
          width: "320px",
          boxShadow: `0 4px 12px var(--color-muted)`,
          borderRadius: "var(--radius-lg)",
          backgroundColor: "var(--color-card)",
          padding: "2rem",
        }}
      >
        <h2
          style={{
            color: "var(--color-primary)",
            marginBottom: "1.5rem",
            textAlign: "center",
            fontWeight: 600,
            fontSize: "1.5rem",
          }}
        >
          Login
        </h2>

        <ReusableForm onSubmit={handleLogin} fields={loginFields} submitText="Sign In" />
      </div>
    </div>
  );
}
