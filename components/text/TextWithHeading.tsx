import { Box, Heading, Text } from "@chakra-ui/react";

interface textWithHeadingProps {
  heading: string;
  text: string;
}

function TextWithHeading({ heading, text }: textWithHeadingProps) {
  return (
    <Box>
      <Heading fontSize="md" fontWeight="regular" mb="1">
        {heading}
      </Heading>
      <Text fontWeight="bold">{text}</Text>
    </Box>
  );
}

export default TextWithHeading;
