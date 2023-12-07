import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { BoxedText, TextWithIcon } from "@/components/text";
import Link from "next/link";

interface SearchProps {
  app_name: string;
  app_id: string;
  header_image: string;
  genres: string;
  categories: string;
  release_date: string;
  positive_ratings: number;
  negative_ratings: number;
}

const SearchResultCard: React.FC<SearchProps> = ({
  app_name,
  app_id,
  header_image,
  genres,
  categories,
  release_date,
  positive_ratings,
  negative_ratings,
}) => {
  return (
    <Link href={`${app_id}`} passHref>
      <Box
        maxW="md"
        borderWidth="2px"
        borderRadius="1g"
        overflow="hidden"
        p={4}
        boxShadow="base"
      >
        <Image src={header_image} alt={app_name} mb={4} />
        <Text fontSize="40px" fontWeight="bold" mb={2}>
          {app_name}
        </Text>
        <Text fontSize="15px" mb={2}>
          {release_date}
        </Text>
        <Flex direction="row" justifyContent="flex-start">
          <TextWithIcon icon="prime:thumbs-up-fill">
            {positive_ratings.toLocaleString()}
          </TextWithIcon>
          <TextWithIcon icon="prime:thumbs-down-fill">
            {negative_ratings.toLocaleString()}
          </TextWithIcon>
        </Flex>

        <BoxedText bg="blue.700" color="white">
          {genres}
        </BoxedText>
        <br />
        <BoxedText bg="blue.700" color="white">
          {categories}
        </BoxedText>
      </Box>
    </Link>
  );
};
export default SearchResultCard;
