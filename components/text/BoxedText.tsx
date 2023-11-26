import { Box, Text } from "@chakra-ui/react";

interface boxedTextProps {
  children: string;
  bg?: string;
  color?: string;
}

function BoxedText({
  children,
  bg = "blue.700",
  color = "white",
}: boxedTextProps) {
  return (
    <Box bg={bg} color={color} px="4" py="1" borderRadius="md">
      <Text>{children}</Text>
    </Box>
  );
}

export default BoxedText;
