import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  ModalBodyStyle,
  ModalCloseButtonStyle,
  ModalContentStyle,
  ModalFooterStyle,
  ModalHeaderStyle,
} from "~/styling/modalStyles";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId?: string;
  title?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoId,
  title,
}: VideoModalProps) {
  // Define a state variable to keep track of the loading state
  const [isLoading, setLoading] = useState(true);

  // This function will be called when the iframe has finished loading
  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent {...ModalContentStyle}>
        <ModalHeader {...ModalHeaderStyle}>{title}</ModalHeader>
        <ModalCloseButton {...ModalCloseButtonStyle} />
        <ModalBody {...ModalBodyStyle}>
          <div className="videoCardContainer">
            {/* Use the Skeleton component to show a loading state */}
            <Skeleton
              isLoaded={!isLoading}
              startColor="TangerineHero.300"
              endColor="TangerineHero.500"
            >
              <iframe
                className="cardVideo"
                src={`https://player.vimeo.com/video/${videoId}?background=1`}
                allow="autoplay; fullscreen"
                allowFullScreen
                onLoad={handleLoad} // Add the onLoad event handler
              ></iframe>
            </Skeleton>
          </div>
        </ModalBody>
        <ModalFooter {...ModalFooterStyle}>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
