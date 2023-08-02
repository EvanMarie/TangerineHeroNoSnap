// VideoCard.tsx
import {
  Card,
  Center,
  HStack,
  Heading,
  IconButton,
  Image,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFillPlayCircleFill, BsInfoCircleFill } from "react-icons/bs";
import VideoModal from "./videoModal";
import InfoModal from "./infoModal";

interface VideoCardProps {
  title?: string;
  thumbnail?: string;
  info?: string;
  videoId?: string;
}

export default function VideoCard({
  title,
  info,
  videoId,
  thumbnail,
}: VideoCardProps) {
  const videoModalDisclosure = useDisclosure();
  const infoModalDisclosure = useDisclosure();

  return (
    <Card
      w={{ base: "275px", lg: "375px" }}
      color="TangerineHero.100"
      textShadow="2px 2px 5px black"
      p="10px 15px"
      bg="TangerineHero.850"
      shadow="2px 2px 10px rgba(255, 130, 33, 0.5)"
      zIndex={23}
      _hover={{
        color: "TangerineHero.800",
        // bg: "TangerineHero.225",
        bgGradient: "linear(to-r, TangerineHero.300, TangerineHero.400)",
        border: `2px solid `,
        transform: "scale(1.03)",
        transition: "all .3s ease-in-out",
        textShadow: "1px 1px 8px white",
      }}
    >
      <VStack>
        <Heading fontSize={{ base: "md", lg: "lg" }}>{title}</Heading>
        <HStack w="100%">
          <Center w="100%" h="100%" onClick={videoModalDisclosure.onOpen}>
            <Image
              src={thumbnail}
              alt="thumbnail"
              width="100%"
              height="100%"
              objectFit="cover"
              borderRadius="4px"
              shadow="lg"
            />
          </Center>
        </HStack>
      </VStack>
      <HStack pt="10px" px="10px" width="100%" justify="center" spacing="20px">
        <IconButton
          icon={<BsFillPlayCircleFill />}
          aria-label="play video"
          // size={{ base: "md", lg: "lg" }}
          size="lg"
          w="70px"
          h="38px"
          onClick={videoModalDisclosure.onOpen}
          shadow="xl"
        />
        <IconButton
          icon={<BsInfoCircleFill />}
          aria-label="more info"
          // size={{ base: "md", lg: "lg" }}
          size="lg"
          w="70px"
          h="38px"
          onClick={infoModalDisclosure.onOpen}
          shadow="xl"
        />
      </HStack>
      <VideoModal
        videoId={videoId}
        title={title}
        isOpen={videoModalDisclosure.isOpen}
        onClose={videoModalDisclosure.onClose}
      />
      <InfoModal
        title={title}
        info={info}
        isOpen={infoModalDisclosure.isOpen}
        onClose={infoModalDisclosure.onClose}
      />{" "}
    </Card>
  );
}
