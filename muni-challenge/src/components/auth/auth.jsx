import { LoginForm } from "@/components/auth/login-form";
import { BrandIcon } from "@/components/icons/brand-icon";

export const Auth = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side */}
      <div className="hidden md:flex md:w-1/2 bg-gray-100 items-center justify-center p-8">
        <div className="max-w-md">
          <BrandIcon width="350px"/>
        </div>
      </div>

      {/* Right side */}
      <LoginForm />
    </div>
  );
};
