import { Modal } from "@/components/modal/modal";
import { ModalContent } from "@/components/modal/modal-content";
import { ModalFooter } from "@/components/modal/modal-footer";
import { ModalTitle } from "@/components/modal/modal-title";

export const CommentModal = ({ handleClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <ModalTitle handleClose={handleClose}>Comentario</ModalTitle>
      <ModalContent>
        <div className="flex flex-col gap-4">
          <textarea
            rows={4}
            className="border rounded-md p-2 resize-none focus:outline-none"
            placeholder="Escribe un comentario..."
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
              console.log("Cambiar estado");
              handleClose();
            }}
          >
            Guardar
          </button>
        </div>
      </ModalFooter>
    </Modal>
  );
};
