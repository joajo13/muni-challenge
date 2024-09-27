import { useSessionStore } from "@/stores/sessionStore";
import { AuthenticatedAvatar } from "./authenticated-avatar";
import { UnauthenticatedAvatarDropdown } from "./unauthenticated-avatar-dropdown";

export const AuthAvatar = () => {
  const state = useSessionStore((state) => state);
  const { isAuthenticated } = state

  return (
    <div>
      {isAuthenticated ? <AuthenticatedAvatar /> : <UnauthenticatedAvatarDropdown />}
    </div>
  );
};
