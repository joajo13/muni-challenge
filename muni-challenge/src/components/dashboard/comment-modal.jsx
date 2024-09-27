import { Modal } from "@/components/modal/modal";
import { ModalContent } from "@/components/modal/modal-content";
import { ModalFooter } from "@/components/modal/modal-footer";
import { ModalTitle } from "@/components/modal/modal-title";
import { updateComment } from "@/services/tramites/updateComment";
import { useSessionStore } from "@/stores/sessionStore";
import { useState } from "react";
import { toast } from "sonner";

export const CommentModal = ({ handleClose, isOpen, comment, idTramite }) => {
  const { token, setRefetch } = useSessionStore((state) => state);

  const [commentValue, setCommentValue] = useState(comment || "");

  const handleChange = (e) => {
    setCommentValue(e.target.value);
  };

  const handleSubmit = async () => {
    const loadingToast = toast.loading("Actualizando comentario...");

    const res = await updateComment({
      comment: commentValue,
      token,
      idTramite,
    });

    if (res.error) {
      toast.dismiss(loadingToast);
      toast.error(res.error);
      return;
    }

    toast.dismiss(loadingToast);
    toast.success("Comentario actualizado correctamente");
    handleClose();
    setRefetch((prev) => !prev);
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <ModalTitle handleClose={handleClose}>Comentario</ModalTitle>
      <ModalContent>
        <div className="flex flex-col gap-4">
          <textarea
            rows={4}
            className="border rounded-md p-2 resize-none focus:outline-none"
            placeholder="Escribe un comentario..."
            value={commentValue}
            onChange={handleChange}
          ></textarea>
        </div>
      </ModalContent>
      <ModalFooter>
        <div className="flex w-full justify-end gap-4 items-center">
          <button
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
            onClick={handleClose}
          >
            Cancelar
          </button>
          <button
            className="bg-cyan-600 text-white px-4 py-2 rounded-md"
            onClick={() => {
              handleSubmit();
            }}
          >
            Guardar
          </button>
        </div>
      </ModalFooter>
    </Modal>
  );
};
