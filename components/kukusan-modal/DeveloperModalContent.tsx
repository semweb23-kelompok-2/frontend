import { Flex, Text, Img, Heading } from "@chakra-ui/react";
import { Developer } from "@/types/detail";
import { TextWithHeading } from "../text";

function DeveloperModalContent({
  developerName,
  developerThumbnail,
  developerAbstract,
  developerHomepage,
  developerLocation,
  developerFounderName,
  developerNumEmployees,
}: Developer) {
  return (
    <Flex flexDirection="column" gap="4">
      {developerThumbnail && (
        <Img
          alignSelf="center"
          h="16"
          maxW="72"
          src={developerThumbnail.value}
          alt={`${developerName?.value} icon`}
          objectFit="contain"
        />
      )}
      {!(
        developerThumbnail ||
        developerAbstract ||
        developerHomepage ||
        developerLocation ||
        developerFounderName ||
        developerNumEmployees
      ) && (
        <Heading fontSize="xl" textAlign="center" py="8">
          Tidak ada informasi tambahan
        </Heading>
      )}
      <Flex flexDirection="column" gap="4" flexWrap="wrap">
        {developerFounderName && (
          <TextWithHeading heading="Founder name">
            {developerFounderName.value}
          </TextWithHeading>
        )}
        {developerLocation && (
          <TextWithHeading heading="Location">
            {developerLocation.value.split("/")[4].replaceAll("_", " ")}
          </TextWithHeading>
        )}
        {developerNumEmployees && (
          <TextWithHeading heading="Number of employee">
            {developerNumEmployees.value}
          </TextWithHeading>
        )}
        {developerHomepage && (
          <TextWithHeading isUrl heading="Homepage">
            {developerHomepage.value}
          </TextWithHeading>
        )}
      </Flex>
      <Text>{developerAbstract?.value}</Text>
    </Flex>
  );
}

export default DeveloperModalContent;
