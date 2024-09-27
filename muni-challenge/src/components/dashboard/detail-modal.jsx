import { Modal } from "@/components/modal/modal";
import { ModalContent } from "@/components/modal/modal-content";
import { ModalFooter } from "@/components/modal/modal-footer";
import { ModalTitle } from "@/components/modal/modal-title";
import { twMerge } from "tailwind-merge";

const InputDetail = ({ label, value, className: parentClassName }) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-gray-800 text-sm">{label}</label>
      <input
        readOnly
        className={twMerge(
          "border rounded-md p-2 resize-none focus:outline-none",
          parentClassName
        )}
        value={value}
      />
    </div>
  );
};

export const DetailModal = ({ handleClose, isOpen, data }) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <ModalTitle handleClose={handleClose}>Detalles</ModalTitle>
      <ModalContent>
        <div className="flex flex-col gap-4 text-start max-h-[500px] overflow-y-auto">
          <h4 className="text-lg font-semibold text-gray-800">Ciudadano</h4>

          <InputDetail label="Nombre" value={data.nombre} />

          <InputDetail label="Correo" value={data.email} />

          <InputDetail label="DNI" value={data.dni} />

          <InputDetail
            label="Fecha de nacimiento"
            value={data.fechaNacimiento}
          />

          <h4 className="text-lg font-semibold text-gray-800">Trámite</h4>

          <InputDetail label="Deporte" value={data.deporte} />

          <div className="w-full flex flex-col gap-2">
            <InputDetail
              className="w-full"
              label="Comprobante"
              value={data.comprobanteImagePath}
            />

            <a
              href={data.comprobanteImagePath}
              target="_blank"
              className="text-blue-600 underline w-fit-content"
            >
              Ver comprobante
            </a>
          </div>

          <InputDetail label="Estado" value={data.status} />

          <InputDetail label="Fecha de creación" value={data.createdAt} />

          <h4 className="text-lg font-semibold text-gray-800">Comentario</h4>

          <textarea
            rows={4}
            className="border rounded-md p-2 resize-none focus:outline-none min-h-36"
            placeholder="Escribe un comentario..."
            readOnly
            value={data.comment || ""}
          ></textarea>
        </div>
      </ModalContent>
      <ModalFooter>
        <div className="flex w-full justify-end gap-4 items-center">
          <button
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
            onClick={handleClose}
          >
            Cerrar
          </button>
        </div>
      </ModalFooter>
    </Modal>
  );
};
