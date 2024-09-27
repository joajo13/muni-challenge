import { CommentModal } from "@/components/dashboard/comment-modal";
import { DetailModal } from "@/components/dashboard/detail-modal";
import { useState } from "react";
import { HiOutlineChatBubbleLeftEllipsis, HiOutlineEye } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

export const ActionCell = ({ data }) => {
  const [modalCommentIsOpen, setIsModalCommentOpen] = useState(false);
  const [modalDetailIsOpen, setIsModalDetailOpen] = useState(false);

  const handleDetailModalClose = () => {
    setIsModalDetailOpen(false);
  };

  const handleCommentModalClose = () => {
    setIsModalCommentOpen(false);
  };

  return (
    <td className="text-center border-t">
      <CommentModal
        isOpen={modalCommentIsOpen}
        handleClose={handleCommentModalClose}
        comment={data.comment}
        idTramite={data.id}
      />

      <DetailModal
        isOpen={modalDetailIsOpen}
        handleClose={handleDetailModalClose}
        data={data}
      />

      <div className="w-full justify-center items-center gap-1 flex">
        <button
          className={twMerge(
            "p-2 text-green-600 hover:bg-green-600/10 rounded-md"
          )}
          onClick={() => {
            setIsModalCommentOpen(true);
          }}
        >
          <HiOutlineChatBubbleLeftEllipsis className="text-xl" />
        </button>

        <button
          className={twMerge(
            "p-2 hover:bg-cyan-600/10 rounded-md text-cyan-600"
          )}
          onClick={() => {
            setIsModalDetailOpen(true);
          }}
        >
          <HiOutlineEye className="text-xl" />
        </button>
      </div>
    </td>
  );
};
