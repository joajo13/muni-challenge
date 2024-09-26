import { twMerge } from "tailwind-merge";
import { useLocation } from "wouter";

export const Footer = () => {
  const location = useLocation();
  return (
    <div
        className={twMerge("text-gray-500 text-center py-10 mt-8 px-8 lg:px-28 flex justify-between items-center", location[0] === "/auth" ? "hidden" : "")}
    >
        <div className="flex items-center">
            <p className="text-sm">© 2024 Muni Challenge</p>
        </div>
    </div>
  )
}