// import { VideosEdit } from "~/videoContent.tsx/editVideos";
import { VideosEdit, VideosMotion } from "~/videoContent.tsx/videoArrays";
import ContentContainer from "../components/design/contentContainer";
import VideoCarousel from "../components/design/videoCarousel";
import VideoCard from "../components/design/videoCard";
import { VStack } from "@chakra-ui/react";
import SectionHeading from "../components/design/sectionHeading";

export default function PageTwo() {
  return (
    <div className="mainBackground">
      <ContentContainer>
        <VStack
          w="100%"
          h="100%"
          spacing={{ base: "15px", md: "20px", lg: "20px" }}
        >
          <VStack w="100%" h="100%" spacing={1}>
            <SectionHeading>- Motion Graphics -</SectionHeading>
            <VideoCarousel>
              {VideosMotion.map((video, index) => (
                <VideoCard
                  key={video.index}
                  title={video.title}
                  info={video.info}
                  videoId={video.videoId}
                  thumbnail={video.thumbnail}
                />
              ))}
            </VideoCarousel>
          </VStack>
          <VStack w="100%" h="100%" spacing={1}>
            <SectionHeading>- Edit -</SectionHeading>
            <VideoCarousel>
              {VideosEdit.map((video, index) => (
                <VideoCard
                  key={video.index}
                  title={video.title}
                  info={video.info}
                  videoId={video.videoId}
                  thumbnail={video.thumbnail}
                />
              ))}
            </VideoCarousel>
          </VStack>
        </VStack>
      </ContentContainer>
    </div>
  );
}
