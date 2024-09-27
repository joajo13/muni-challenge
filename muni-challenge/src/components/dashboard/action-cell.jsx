import { CommentModal } from "@/components/dashboard/comment-modal";
import { useState } from "react";
import {
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineEllipsisHorizontal,
  HiOutlineEye,
  HiOutlinePencilSquare,
} from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

export const ActionCell = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalCommentIsOpen, setIsModalCommentOpen] = useState(false);

  const handleStatusModalClose = () => {
    setIsModalCommentOpen(false);
  };

  return (
    <td className="text-center relative py-2">
      {/* Backdrop */}
      <div
        className={twMerge(
          "fixed inset-0 bg-transparent z-10 h-screen w-screen",
          isOpen ? "block" : "hidden"
        )}
        onClick={() => setIsOpen(false)}
      ></div>

      <div className="relative z-40">
        {/* Trigger */}
        <button
          className={twMerge(
            "rounded-md group px-2 py-2 hover:bg-gray-100 transition-colors duration-200"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiOutlineEllipsisHorizontal className="text-xl" />
        </button>

        {/* Dropdown */}
        <div
          className={twMerge(
            "bg-white rounded-md border absolute top-8 right-6 min-w-36 flex flex-col z-50",
            isOpen ? "block" : "hidden"
          )}
        >
          <button
            className={twMerge(
              "flex px-4 py-2 text-gray-800 text-sm hover:bg-gray-100 w-full text-left text-nowrap justify-between items-center gap-4"
            )}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Cambiar estado
            <HiOutlinePencilSquare className="text-xl" />
          </button>

          <button
            className={twMerge(
              "flex px-4 py-2 text-gray-800 text-sm hover:bg-gray-100 w-full text-left text-nowrap justify-between items-center gap-4"
            )}
            onClick={() => {
              setIsModalCommentOpen(true);
            }}
          >
            Agregar comentario
            <HiOutlineChatBubbleLeftEllipsis className="text-xl" />
          </button>

          <CommentModal
            currentStatus={data.status}
            isOpen={modalCommentIsOpen}
            handleClose={handleStatusModalClose}
          />

          <button
            className={twMerge(
              "flex px-4 py-2 text-gray-800 text-sm hover:bg-gray-100 w-full text-left text-nowrap justify-between items-center gap-4"
            )}
            onClick={() => {
              setIsOpen(false);
              // Add your delete action here
            }}
          >
            Ver
            <HiOutlineEye className="text-xl" />
          </button>
        </div>
      </div>
    </td>
  );
};
