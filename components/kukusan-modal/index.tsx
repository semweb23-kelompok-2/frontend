import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface modalProps {
  modalControl: modalControlType;
  type: string;
}

type modalControlType = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

type modalContentType = {
  [x: string]: {
    title: string;
    content: ReactNode;
  };
};

function KukusanModal({ modalControl, type }: modalProps) {
  const modalContent: modalContentType = {
    developer: {
      title: "Developer detail",
      content: <p>Hello</p>,
    },
    publisher: {
      title: "Publisher detail",
      content: <p>Hello</p>,
    },
    genre: {
      title: "Genre detail",
      content: <p>Hello</p>,
    },
  };

  return (
    <Modal isOpen={modalControl.isOpen} onClose={modalControl.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{modalContent[type].content}</ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default KukusanModal;
