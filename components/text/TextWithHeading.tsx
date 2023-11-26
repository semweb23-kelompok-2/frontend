import { Box, Heading, Text, BoxProps, Link } from "@chakra-ui/react";

interface textWithHeadingProps extends BoxProps {
  heading: string;
  children: string;
  gap?: string;
  isSwap?: boolean;
  isUrl?: boolean;
}

function TextWithHeading({
  w,
  isSwap = false,
  isUrl = false,
  gap = "1",
  heading,
  children,
}: textWithHeadingProps) {
  return (
    <Box w={w}>
      <Heading fontSize="md" fontWeight={isSwap ? "bold" : "regular"} mb={gap}>
        {heading}
      </Heading>
      {isUrl ? (
        <Link target="_blank" href={children}>
          <Text fontWeight={isSwap ? "regular" : "bold"}>{children}</Text>
        </Link>
      ) : (
        <Text fontWeight={isSwap ? "regular" : "bold"}>{children}</Text>
      )}
    </Box>
  );
}

export default TextWithHeading;
