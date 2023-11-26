import { Box, Heading, Text, BoxProps } from "@chakra-ui/react";

interface textWithHeadingProps extends BoxProps {
  heading: string;
  children: string;
  gap?: string;
  isSwap?: boolean;
}

function TextWithHeading({
  w,
  isSwap = false,
  gap = "1",
  heading,
  children,
}: textWithHeadingProps) {
  return (
    <Box w={w}>
      <Heading fontSize="md" fontWeight={isSwap ? "bold" : "regular"} mb={gap}>
        {heading}
      </Heading>
      <Text fontWeight={isSwap ? "regular" : "bold"}>{children}</Text>
    </Box>
  );
}

export default TextWithHeading;
