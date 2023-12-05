import { Box, Heading, Text, BoxProps, Link } from "@chakra-ui/react";

interface textWithHeadingProps extends BoxProps {
  heading: string;
  children: string;
  gap?: string;
  isSwap?: boolean;
  isUrl?: boolean;
  onClick?: () => void;
}

function TextWithHeading({
  w,
  isSwap,
  isUrl,
  gap = "1",
  onClick,
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
        <Text
          textDecoration={onClick ? "underline" : "initial"}
          fontWeight={isSwap ? "regular" : "bold"}
          cursor={onClick ? "pointer" : "initial"}
          onClick={onClick}
        >
          {children}
        </Text>
      )}
    </Box>
  );
}

export default TextWithHeading;
