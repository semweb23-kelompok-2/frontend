import { Flex, Text, Img } from "@chakra-ui/react";
import { Publisher } from "@/types/detail";
import { TextWithHeading } from "../text";

function PublisherModalContent({
  publisherAbstract,
  publisherFoundDate,
  publisherLocation,
  publisherThumbnail,
}: Publisher) {
  return (
    <Flex flexDirection="column" gap="2">
      <Flex flexDirection={{ base: "column", lg: "row" }} gap="8">
        <Img
          alignSelf="center"
          h="16"
          maxW="72"
          src={publisherThumbnail.value}
          objectFit="contain"
        />
        <Flex flexDirection={{ base: "row", lg: "column" }} gap="4">
          <TextWithHeading heading="Found Date">
            {publisherFoundDate.value}
          </TextWithHeading>
          <TextWithHeading heading="Location">
            {publisherLocation.value.split("/")[4].replaceAll("_", " ")}
          </TextWithHeading>
        </Flex>
      </Flex>
      <Text>{publisherAbstract?.value}</Text>
    </Flex>
  );
}

export default PublisherModalContent;
