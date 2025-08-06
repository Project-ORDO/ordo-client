import { FaGoogle, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface OAuthButtonsProps {
  onGoogleLogin: () => void;
  onGitHubLogin: () => void;
}

export default function OAuthButtons({ onGoogleLogin, onGitHubLogin }: OAuthButtonsProps) {
  return (
    <div className="space-y-3 mb-6">
      <Button
        variant="outline"
        className="w-full flex items-center justify-center gap-2 rounded-[var(--radius-md)]"
        onClick={onGoogleLogin}
      >
        <FaGoogle className="w-4 h-4" />
        Continue with Google
      </Button>

      <Button
        variant="outline"
        className="w-full flex items-center justify-center gap-2 rounded-[var(--radius-md)]"
        onClick={onGitHubLogin}
      >
        <FaGithub className="w-4 h-4" />
        Continue with GitHub
      </Button>
    </div>
  );
}
