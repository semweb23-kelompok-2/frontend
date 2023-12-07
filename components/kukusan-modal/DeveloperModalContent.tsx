import { Flex, Text, Img } from "@chakra-ui/react";
import { Developer } from "@/types/detail";
import { TextWithHeading } from "../text";

function DeveloperModalContent({
  developerThumbnail,
  developerAbstract,
}: Developer) {
  return (
    <Flex flexDirection="column" gap="4">
      <Img
        alignSelf="center"
        h="16"
        maxW="72"
        src={developerThumbnail.value}
        objectFit="contain"
      />
      <Text>{developerAbstract?.value}</Text>
    </Flex>
  );
}

export default DeveloperModalContent;
