import { FaGoogle, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface OAuthButtonsProps {
  onOAuthLogin: (provider: "google" | "github") => void;
  className?: string;
}

export default function OAuthButtons({ onOAuthLogin, className = "" }: OAuthButtonsProps) {
  return (
    <div className={`space-y-3 mb-6 ${className}`}>
      <Button
        variant="outline"
        className="w-full flex items-center justify-center gap-2 rounded-[var(--radius-md)]"
        onClick={() => onOAuthLogin("google")}
      >
        <FaGoogle className="w-4 h-4" />
        Continue with Google
      </Button>
      <Button
        variant="outline"
        className="w-full flex items-center justify-center gap-2 rounded-[var(--radius-md)]"
        onClick={() => onOAuthLogin("github")}
      >
        <FaGithub className="w-4 h-4" />
        Continue with GitHub
      </Button>
    </div>
  );
}
