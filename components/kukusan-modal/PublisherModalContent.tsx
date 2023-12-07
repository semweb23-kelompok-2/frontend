import { Flex, Text, Img } from "@chakra-ui/react";
import { Publisher } from "@/types/detail";
import { TextWithHeading } from "../text";

function PublisherModalContent({
  publisherAbstract,
  publisherFoundDate,
  publisherLocation,
  publisherThumbnail,
  publisherFounderName,
  publisherHomepage,
  publisherNumEmployees,
}: Publisher) {
  return (
    <Flex flexDirection="column" gap="4">
      <Img
        alignSelf="center"
        h="16"
        maxW="72"
        src={publisherThumbnail.value}
        objectFit="contain"
      />
      <Flex flexDirection="column" gap="4" flexWrap="wrap">
        {publisherFounderName && (
          <TextWithHeading heading="Founder name">
            {publisherFounderName.value}
          </TextWithHeading>
        )}
        {publisherFoundDate && (
          <TextWithHeading heading="Founding date">
            {publisherFoundDate.value}
          </TextWithHeading>
        )}
        {publisherLocation && (
          <TextWithHeading heading="Location">
            {publisherLocation.value.split("/")[4].replaceAll("_", " ")}
          </TextWithHeading>
        )}
        {publisherNumEmployees && (
          <TextWithHeading heading="Number of employee">
            {publisherNumEmployees.value}
          </TextWithHeading>
        )}

        {publisherHomepage && (
          <TextWithHeading isUrl heading="Homepage">
            {publisherHomepage.value}
          </TextWithHeading>
        )}
      </Flex>
      <Text>{publisherAbstract?.value}</Text>
    </Flex>
  );
}

export default PublisherModalContent;
