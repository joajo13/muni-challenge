import { useSessionStore } from "@/stores/sessionStore";
import { AuthenticatedAvatar } from "./authenticated-avatar";
import { UnauthenticatedAvatarDropdown } from "./unauthenticated-avatar-dropdown";

export const Auth = () => {
  const { isAuthenticated } = useSessionStore((state) => state);

  return (
    <div>
      {isAuthenticated ? <AuthenticatedAvatar /> : <UnauthenticatedAvatarDropdown />}
    </div>
  );
};
