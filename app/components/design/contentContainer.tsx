import { Flex } from "@chakra-ui/react";

interface ContentContainerProps {
  children: React.ReactNode;
}

export default function ContentContainer({ children }: ContentContainerProps) {
  return (
    <Flex w="100%" justify="center" align="center" pt="10px">
      {children}
    </Flex>
  );
}
