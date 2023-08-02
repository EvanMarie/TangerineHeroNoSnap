import { Flex, HStack, Text, useTheme } from "@chakra-ui/react";
import { NavLink } from "@remix-run/react";

export default function DesktopLinks() {
  const theme = useTheme();

  const LinkStyle = {
    color: "TangerineHero.300",
    textShadow: `2px 2px 20px ${theme.colors.TangerineHero[600]}`,
    _hover: {
      color: "TangerineHero.200",
      textShadow: `2px 2px 20px ${theme.colors.TangerineHero[400]}`,
    },
  };

  return (
    <Flex h="100%" display={{ base: "none", lg: "flex" }} align="end" pb="10px">
      <HStack w="fit-content" spacing="60px">
        <NavLink to="/main">
          <Text {...LinkStyle}>Home</Text>
        </NavLink>
        <NavLink to="/work">
          <Text {...LinkStyle}>Work</Text>
        </NavLink>
        <NavLink to="/about">
          <Text {...LinkStyle}>About</Text>
        </NavLink>
      </HStack>
    </Flex>
  );
}
