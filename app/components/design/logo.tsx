import { Box, useTheme } from "@chakra-ui/react";

export default function Logo() {
  const theme = useTheme();

  return (
    <Box
      fontFamily="'Staatliches', cursive"
      fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
      color="TangerineHero.300"
      bgGradient={`linear(to-b, ${theme.colors.TangerineHero[100]}, ${theme.colors.TangerineHero[300]}, ${theme.colors.TangerineHero[400]})`}
      bgClip="text"
      _hover={{
        cursor: "pointer",
        transform: "translateY(5px)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      Tangerine Hero
    </Box>
  );
}
