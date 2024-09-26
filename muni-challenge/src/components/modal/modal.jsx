import { twMerge } from "tailwind-merge";

export const Modal = ({ children, isOpen = false, handleClose = () => {} }) => {
  const backdropClasses = twMerge([
    "fixed inset-0 z-50 bg-black bg-opacity-10",
    isOpen ? "block" : "hidden",
  ]);

  const modalClasses = twMerge([
    "bg-white border rounded-lg p-4 w-[75vw] px-8 fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    isOpen ? "block" : "hidden",
  ]);
  
  return (
    <div>
      {/* backdrop */}
      <button className={backdropClasses} onClick={handleClose}></button>

      {/* modal */}
      <div className={modalClasses}>{children}</div>
    </div>
  );
};
