import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import PublisherModalContent from "./PublisherModalContent";
import { Developer, Publisher } from "@/types/detail";
import { modalContentType, modalProps } from "@/types/modal";
import DeveloperModalContent from "./DeveloperModalContent";

function KukusanModal({ modalControl, type, data }: modalProps) {
  const modalContent: modalContentType = {
    developer: {
      title: (data as Developer)?.developerName?.value,
      content: <DeveloperModalContent {...(data as Developer)} />,
    },
    publisher: {
      title: (data as Publisher)?.publisherName?.value,
      content: <PublisherModalContent {...(data as Publisher)} />,
    },
  };

  return (
    <Modal
      size="2xl"
      isOpen={modalControl.isOpen}
      onClose={modalControl.onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalContent[type].title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{modalContent[type].content}</ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default KukusanModal;
