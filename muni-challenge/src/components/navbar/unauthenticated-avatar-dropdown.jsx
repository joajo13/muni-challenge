import { useState } from "react";
import { HiMiniUserCircle } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";
import { Link } from "wouter";

export const UnauthenticatedAvatarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      <div className={twMerge("fixed inset-0 bg-transparent z-10 h-screen w-screen", isOpen ? "block" : "hidden")} onClick={() => setIsOpen(false)}></div>

      <div className="relative">
        {/* Trigger */}
        <button
          className={twMerge("rounded-full group p-2 rela")}
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiMiniUserCircle
            size={36}
            className={twMerge(
              "text-[#717075] transition-colors duration-200 group-hover:text-cyan-600"
            )}
          />
        </button>

        {/* Dropdown */}
        <div
          className={twMerge(
            "bg-white rounded-md border z-20 absolute top-12 right-0 w-36 flex flex-col",
            isOpen ? "block" : "hidden"
          )}
        >
          <Link
            to="/auth"
            className={twMerge(
              "block px-4 py-2 text-gray-800 text-sm hover:bg-gray-100 w-full text-left"
            )}
          >
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};
