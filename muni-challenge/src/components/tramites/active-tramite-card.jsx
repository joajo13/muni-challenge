import { useState } from "react";
import { Modal } from "@/components/modal/modal";
import { ModalTitle } from "@/components/modal/modal-title";
import { ModalContent } from "@/components/modal/modal-content";
import { ActiveTramiteLink } from "@/components/tramites/active-tramite-link";
import { DisableTramiteLink } from "@/components/tramites/disable-tramite-link";

export const ActiveTramiteCard = ({ tramite }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="bg-white w-full h-44 rounded-md border p-8 flex items-center text-left justify-between group hover:border-cyan-600 transition-colors duration-200 cursor-pointer"
        key={tramite.name}
        onClick={handleToggleModal}
      >
        <div>
          <h2 className="text-lg font-bold text-gray-800">{tramite.name}</h2>
          <p className="text-gray-500 mt-1">{tramite.description}</p>
        </div>

        <tramite.icon
          size={38}
          className="text-gray-600 group group-hover:text-cyan-600"
        />
      </button>

      <Modal handleClose={handleToggleModal} isOpen={isOpen}>
        <ModalTitle handleClose={handleToggleModal}>{tramite.name}</ModalTitle>

        <ModalContent>
          {tramite.links?.map((link) =>
            link.status === "active" ? (
              <ActiveTramiteLink link={link} key={link.name} />
            ) : (
              <DisableTramiteLink link={link} key={link.name} />
            )
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
