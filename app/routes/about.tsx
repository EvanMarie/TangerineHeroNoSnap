import { Image, Text, Box, VStack } from "@chakra-ui/react";
import ContentContainer from "~/components/design/contentContainer";
import SectionHeading from "~/components/design/sectionHeading";

export default function PageThree() {
  return (
    <div className="mainBackground">
      <ContentContainer>
        <VStack w="100%" p={3} pt={0}>
          <SectionHeading>- Joel Edwards -</SectionHeading>
          <Box
            maxWidth="1200px"
            bg="TangerineHero.750"
            py={3}
            px={3}
            rounded="md"
            fontSize={{ base: "sm", md: "md" }}
          >
            <Image
              src="/images/joelHeadshot.png"
              alt="Joel Headshot"
              w={{ base: "175px", sm: "200px", md: "350px", lg: "425px" }}
              rounded="md"
              float="left"
              m={{ base: "10px 10px 10px 0", md: "10 20px 20px 0" }}
            />

            <Text>
              After two decades of audio and video post-production work in
              Nashville and Atlanta, I created Tangerine Hero in 2011 to do what
              I love: using my digital toolbox to create images and sounds that
              convey the arc of a story, illuminated by emotion.
            </Text>
            <br />
            <Text>
              I can find the essentials in a mountain of footage, cut them down
              to a clear, powerful narrative, illustrate complex concepts with
              motion graphics, compose, record, edit, and mix the music and
              sound effects to support the storyline, and deliver the final
              product on time and under budget.
            </Text>
            <br />
          </Box>
        </VStack>
      </ContentContainer>
    </div>
  );
}
