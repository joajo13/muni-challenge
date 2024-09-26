import { useSessionStore } from "@/stores/sessionStore";
import { AuthenticatedAvatar } from "./authenticated-avatar";
import { UnauthenticatedAvatarDropdown } from "./unauthenticated-avatar-dropdown";

export const Auth = () => {
  const state = useSessionStore((state) => state);
  const { isAuthenticated } = state
  console.log(state)
  return (
    <div>
      {isAuthenticated ? <AuthenticatedAvatar /> : <UnauthenticatedAvatarDropdown />}
    </div>
  );
};
