// InfoModal.tsx
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Center,
} from "@chakra-ui/react";
import {
  ModalBodyStyle,
  ModalCloseButtonStyle,
  ModalContentStyle,
  ModalFooterStyle,
  ModalHeaderStyle,
  ModalOverlayStyle,
} from "~/styling/modalStyles";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  info?: string;
}

export default function InfoModal({
  isOpen,
  onClose,
  title,
  info,
}: InfoModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay {...ModalOverlayStyle} />
      <ModalContent {...ModalContentStyle}>
        <ModalHeader {...ModalHeaderStyle}>{title}</ModalHeader>
        <ModalCloseButton {...ModalCloseButtonStyle} />
        <ModalBody {...ModalBodyStyle}>
          <Center w="100%" h="100%" p="15px">
            {info}
          </Center>
        </ModalBody>
        <ModalFooter {...ModalFooterStyle}>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
