import { HiXMark } from "react-icons/hi2";

export const ModalTitle = ({ children, handleClose = () => {} }) => {
  return (
    <div className="flex items-center justify-between py-4">
      <h1 className="text-xl font-bold">{children}</h1>
      <button className="text-gray-500" onClick={handleClose}>
        <HiXMark className="h-6 w-6" />
      </button>
    </div>
  );
};
