import {
  HStack,
  Icon,
  useTheme,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  useDisclosure,
  DrawerFooter,
  Box,
  Stack,
  Image,
  Text,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import Logo from "./logo";
import { BsFillCaretDownSquareFill } from "react-icons/bs";
import { FaVimeo, FaLinkedin } from "react-icons/fa";
import { NavLink } from "@remix-run/react";
import { ImSoundcloud2 } from "react-icons/im";
import DesktopLinks from "./desktopLinks";

export default function LogoBar() {
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const LinkStyle = {
    w: { base: "375px", lg: "250px" },
    py: "10px",
    align: "center",
    color: "TangerineHero.200",
    fontSize: "2xl",
    cursor: "pointer",
    fontWeight: "600",
    textShadow: `2px 2px 20px ${theme.colors.TangerineHero[500]}`,
    _hover: {
      bg: "TangerineHero.300",
      color: "TangerineHero.700",
      transform: "scale(1.05)",
      rounded: "sm",
      transition: "all 0.3s ease-in-out",
      textShadow: `2px 2px 20px ${theme.colors.TangerineHero[100]}`,
    },
  };

  return (
    <>
      <HStack
        p="0px 20px"
        align="center"
        justify="space-between"
        textAlign="center"
        bg="TangerineHero.950"
        w="100%"
        h="75px"
        position="fixed"
        shadow="xl"
        top="0"
        left="0"
        zIndex="11"
        boxShadow={`0px 4px 8px 0px ${theme.colors.TangerineHero[700]}`}
      >
        {" "}
        <NavLink to="#pageOne">
          <Logo />
        </NavLink>
        <HStack w="fit-content" spacing="50px" align="flex-end" h="100%">
          <DesktopLinks />
          <Flex h="100%" align="center">
            <Icon
              as={BsFillCaretDownSquareFill}
              w={9}
              h={9}
              color="TangerineHero.400"
              _hover={{
                color: "TangerineHero.200",
                transform: "scale(1.05)",
                transition: "all 0.3s ease-in-out",
              }}
              onClick={onOpen} // Open the drawer when the icon is clicked
            />
          </Flex>
        </HStack>
      </HStack>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay
          bg="TangerineHero.275"
          backdropFilter="invert(10%) blur(2px)"
        />
        <DrawerContent
          w="100%"
          h={{ base: "100%", lg: "275px" }}
          bg="TangerineHero.800"
          shadow="xl"
        >
          <DrawerCloseButton color="TangerineHero.200" size="lg" />
          <DrawerHeader pb="0px">
            <NavLink to="/main" onClick={onClose}>
              <Logo />
            </NavLink>
          </DrawerHeader>

          <DrawerBody pt="0px">
            <Stack
              w="100%"
              direction={{ base: "column", lg: "row" }}
              align="center"
              justify={{ base: "center", lg: "space-evenly" }}
              spacing={{ base: "30px", lg: "0px" }}
              py={{ base: "60px", lg: "20px" }}
            >
              <NavLink to="/main">
                <Box {...LinkStyle} onClick={onClose}>
                  Home
                </Box>
              </NavLink>
              <NavLink to="/work">
                <Box {...LinkStyle} onClick={onClose}>
                  Work
                </Box>
              </NavLink>
              <NavLink to="/about">
                <Box {...LinkStyle} onClick={onClose}>
                  About
                </Box>
              </NavLink>
            </Stack>
          </DrawerBody>

          <DrawerFooter
            bg="TangerineHero.475"
            color="TangerineHero.900"
            fontWeight="600"
          >
            <Stack
              direction={{ base: "column", lg: "row" }}
              w="100%"
              justify={{ base: "center", lg: "space-between" }}
              align="center"
              textAlign="center"
              spacing="20px"
            >
              <Stack
                direction={{ base: "column", lg: "row" }}
                spacing={{ base: "10px", lg: "20px" }}
                justify="space-evenly"
                align="center"
                flexGrow="1"
              >
                <Box>678-640-3557</Box>
                <Box>joel@tangerinehero.com</Box>
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
              <HStack>
                <Text fontSize="sm">Created by </Text>
                <Link href="http://www.iheartcomponents.com" isExternal>
                  <Image
                    src="/images/iheartcomponents.png"
                    w="150px"
                    rounded="md"
                    cursor="pointer"
                    _hover={{
                      transform: "scale(1.05)",
                      transition: "all 0.3s ease-in-out",
                    }}
                  />
                </Link>
              </HStack>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
