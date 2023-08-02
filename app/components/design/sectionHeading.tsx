import { Box, useTheme } from "@chakra-ui/react";

interface SectionHeadingProps {
  children: React.ReactNode;
  fontSize?: string | string[] | object;
}

export default function SectionHeading({
  children,
  fontSize = { base: "xl", md: "2xl", lg: "3xl" },
}: SectionHeadingProps) {
  const theme = useTheme();

  return (
    <Box
      fontFamily="'Staatliches', cursive"
      fontSize={fontSize}
      color="TangerineHero.800"
      textShadow={`2px 2px 20px  ${theme.colors.TangerineHero[200]}`}
      // bgGradient={`linear(to-b, ${theme.colors.TangerineHero[800]}, ${theme.colors.TangerineHero[700]}, ${theme.colors.TangerineHero[600]})`}
      // bgClip="text"
    >
      {children}
    </Box>
  );
}
