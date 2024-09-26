import { signin } from "@/services/auth/signin";
import { useSessionStore } from "@/stores/sessionStore";
import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import { toast } from "sonner";
import { useLocation } from "wouter";

export const LoginForm = () => {
  const { setUserSession } = useSessionStore((state) => state);
  const [showPassword, setShowPassword] = useState(false);
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [, navigate] = useLocation();

  const handleUsernameChange = (e) => setUsernameValue(e.target.value);
  const handlePasswordChange = (e) => setPasswordValue(e.target.value);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loadingToast = toast.loading("Signing in...");
      const { user, token } = await signin(usernameValue, passwordValue);

      toast.dismiss(loadingToast);

      if (!token || !user) {
        toast.error("Invalid credentials")
        return;
      }

      toast.success("Signed in successfully");

      setUserSession(user, token);

      navigate("/dashboard");
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
          Sign in
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username or email
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username or email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleUsernameChange}
              value={usernameValue}
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={handlePasswordChange}
                value={passwordValue}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <HiOutlineEyeSlash className="h-5 w-5" />
                ) : (
                  <HiOutlineEye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-800 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
