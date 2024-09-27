import { useLocation } from "wouter";
import { AuthAvatar } from "./auth-avatar";
import { Brand } from "./brand";
import { Links } from "./links";
import { twMerge } from "tailwind-merge";

export const Navbar = () => {
  const location = useLocation();
  return (
    <nav
      className={twMerge(
        "flex min-w-full h-16 border-b border-gray-100 items-center justify-between px-4 lg:px-28 fixed top-0 left-0 z-50 w-full backdrop-blur-md",
        location[0] === "/auth" ? "hidden" : ""
      )}
    >
      {/* Brand */}
      <Brand />

      {/* Links */}
      <Links />

      {/* Auth */}
      <AuthAvatar />
    </nav>
  );
};
