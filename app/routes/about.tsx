import {
  Image,
  Text,
  Box,
  VStack,
  Stack,
  Link,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaLinkedin, FaVimeo } from "react-icons/fa";
import { ImSoundcloud2 } from "react-icons/im";
import ContentContainer from "~/components/design/contentContainer";
import SectionHeading from "~/components/design/sectionHeading";

export default function PageThree() {
  return (
    <div className="mainBackground">
      <ContentContainer>
        <VStack w="100%" p={3} pt={0} pb={{ base: "125px", sm: "10px" }}>
          <SectionHeading>- Joel Edwards -</SectionHeading>
          <Box
            maxWidth="1200px"
            bg="TangerineHero.775"
            py={3}
            px={3}
            rounded="md"
            fontSize={{ base: "sm", md: "md" }}
          >
            <VStack w="100%">
              <Box>
                <Image
                  src="/images/joelHeadshot.png"
                  alt="Joel Headshot"
                  w={{ base: "175px", sm: "200px", md: "350px", lg: "425px" }}
                  rounded="md"
                  float="left"
                  m={{ base: "10px 10px 10px 0", md: "10px 20px 20px 0" }}
                />

                <Text>
                  After two decades of audio and video post-production work in
                  Nashville and Atlanta, I created Tangerine Hero in 2011 to do
                  what I love: using my digital toolbox to create images and
                  sounds that convey the arc of a story, illuminated by emotion.
                </Text>
                <br />
                <Text>
                  I can find the essentials in a mountain of footage, cut them
                  down to a clear, powerful narrative, illustrate complex
                  concepts with motion graphics, compose, record, edit, and mix
                  the music and sound effects to support the storyline, and
                  deliver the final product on time and under budget.
                </Text>
                <Text>
                  After two decades of audio and video post-production work in
                  Nashville and Atlanta, I created Tangerine Hero in 2011 to do
                  what I love: using my digital toolbox to create images and
                  sounds that convey the arc of a story, illuminated by emotion.
                </Text>
                <br />
                <Text>
                  I can find the essentials in a mountain of footage, cut them
                  down to a clear, powerful narrative, illustrate complex
                  concepts with motion graphics, compose, record, edit, and mix
                  the music and sound effects to support the storyline, and
                  deliver the final product on time and under budget.
                </Text>
              </Box>
              <Box>
                <Stack
                  direction={{ base: "column", lg: "row" }}
                  spacing={{ base: "5px", lg: "40px" }}
                  justify="space-evenly"
                  align="center"
                  flexGrow="1"
                >
                  <HStack
                    w={{ base: "100%", lg: "fit-content" }}
                    spacing={4}
                    color="TangerineHero.200"
                  >
                    <Box>678-640-3557</Box>
                    <Box>joel@tangerinehero.com</Box>
                  </HStack>
                  {/* <Box>Other: </Box> */}
                  <HStack w="150px" justify="space-between">
                    <Link
                      href="https://www.linkedin.com/in/tangerinehero/"
                      isExternal
                    >
                      <IconButton
                        as={FaLinkedin}
                        aria-label="social media"
                        cursor="pointer"
                      />
                    </Link>
                    <Link href="https://vimeo.com/tangerineheroatl" isExternal>
                      <IconButton
                        as={FaVimeo}
                        aria-label="social media"
                        cursor="pointer"
                      />
                    </Link>
                    <Link
                      href="https://www.instagram.com/tangerinehero/"
                      isExternal
                    >
                      <IconButton
                        // as={FaSoundcloud}
                        as={ImSoundcloud2}
                        aria-label="social media"
                        cursor="pointer"
                      />
                    </Link>
                    {/* <IconButton as={} aria-label="social media" /> */}
                  </HStack>{" "}
                </Stack>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </ContentContainer>
    </div>
  );
}
