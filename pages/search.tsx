import { MainLayout } from "@/components/layout";
import { Box, Image, Text, Flex, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import SearchResultCard from "./searchResultCard";
import React from "react";
import axios from "axios";

const baseUrl = "https://backend-oggxhc5l5q-as.a.run.app/api/games";

interface SearchResult {
  app_id: string;
  app_name: string;
  header_image: string;
  genres: string;
}

// need release date and category

const fetchSearchResult = async (query: String): Promise<SearchResult[]> => {
  try {
    const response = await axios.get(`${baseUrl}/search?name=${query}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    const { bindings } = response.data.results;

    const results: SearchResult[] = bindings.map((binding: any) => ({
      app_id: binding.app_id.value,
      app_name: binding.app_name.value,
      header_image: binding.header_image.value,
      genres: binding.genres.value,
    }));

    return results;
  } catch (error) {
    console.error("Error fetching search results: ", error);
    throw error;
  }
};

const SearchResultPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || router.query.query;

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setIsLoading(true);
        const results = await fetchSearchResult(query as string);
        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching search results: ", error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  if (isLoading) {
    return <div>Sedang memuatkan...</div>;
  }
  return (
    <MainLayout
      title="KukusanFinder - Search"
      color="white"
      justifyContent="center"
      alignItems="center"
    >
      <Flex direction="column" justify="center">
        <Text fontSize="40px" fontWeight="bold">
          Search Results for "{query}"
        </Text>
        {searchResults.length === 0 ? (
          <Text fontSize="20px">No search results found.</Text>
        ) : (
          <Flex justify="center" p={4}>
            <SimpleGrid columns={[1, 2]} spacing={4}>
              {searchResults.map((result, index) => (
                <SearchResultCard
                  key={index}
                  app_id={result.app_id}
                  app_name={result.app_name}
                  header_image={result.header_image}
                  genres={result.genres}
                />
              ))}
            </SimpleGrid>
          </Flex>
        )}
      </Flex>
    </MainLayout>
  );
};

export default SearchResultPage;
