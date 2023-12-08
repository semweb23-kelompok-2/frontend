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
        <Link w="4" target="_blank" href={children}>
          <Text w="fit-content" fontWeight={isSwap ? "regular" : "bold"}>
            {children}
          </Text>
        </Link>
      ) : (
        <Text
          w="fit-content"
          dangerouslySetInnerHTML={{ __html: children }}
          textDecoration={onClick ? "underline" : "initial"}
          fontWeight={isSwap ? "regular" : "bold"}
          cursor={onClick ? "pointer" : "initial"}
          onClick={onClick}
        />
      )}
    </Box>
  );
}

export default TextWithHeading;
