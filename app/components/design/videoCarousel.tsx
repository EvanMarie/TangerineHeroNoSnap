import { VStack } from "@chakra-ui/react";

interface VideoCarouselProps {
  children: React.ReactNode;
}

export default function VideoCarousel({ children }: VideoCarouselProps) {
  return (
    <div className="carousel-outer">
      <VStack spacing="0px">
        <div className="carousel-container">
          <div
            className="carousel-track"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {children}
          </div>
        </div>
      </VStack>
    </div>
  );
}
