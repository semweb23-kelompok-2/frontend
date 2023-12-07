import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { BoxedText } from "@/components/text";
import Link from "next/link";

interface SearchProps {
  app_name: string;
  app_id: string;
  header_image: string;
  genres: string;
  // add category and release_date
}

const baseUrl = "https://backend-oggxhc5l5q-as.a.run.app/api/games";

const SearchResultCard: React.FC<SearchProps> = ({
  app_name,
  app_id,
  header_image,
  genres,
  // add category and release_date
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
        <Text fontSize="20px" fontWeight="bold" mb={2}>
          {app_name}
        </Text>
        <BoxedText bg="blue.700" color="white">
          {genres}
        </BoxedText>
      </Box>
    </Link>
  );
};
export default SearchResultCard;
