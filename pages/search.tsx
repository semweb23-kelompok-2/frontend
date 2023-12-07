import { MainLayout } from "@/components/layout";
import {
  Text,
  Flex,
  SimpleGrid,
  InputGroup,
  Input,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect, LegacyRef, useRef } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import SearchResultCard from "./searchResultCard";
import React from "react";
import axios from "axios";
import LoadingLayout from "@/components/layout/LoadingLayout";

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
    const results: SearchResult[] = !bindings[0].app_id
      ? []
      : bindings.map((binding: any) => ({
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
  const [isLoadingPartial, setisLoadingPartial] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || router.query.query;
  const toast = useToast();
  const inputRef = useRef<HTMLInputElement>();

  function handleClickSearch() {
    if (inputRef && inputRef.current) {
      if (inputRef.current.value)
        router.push(`/search?q=${inputRef.current.value}`);
      else if (!toast.isActive("toast"))
        toast({
          id: "toast",
          title: "Masukkan input terlebih dahulu",
          status: "error",
          position: "top",
          duration: 5000,
        });
    }
  }

  useEffect(() => {
    const fetchResults = async () => {
      try {
        if (!isLoading) setisLoadingPartial(true);
        const results = await fetchSearchResult(query as string);
        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching search results: ", error);
        throw error;
      } finally {
        setIsLoading(false);
        setisLoadingPartial(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <MainLayout
      title="KukusanFinder - Search"
      isLoading={isLoading}
      color="white"
      justifyContent="center"
      alignItems="center"
    >
      <Flex direction="column" justify="center">
        <Text fontSize="40px" fontWeight="bold">
          Search Results for {query}
        </Text>
        <InputGroup maxW="640px" alignItems="center">
          <Input
            ref={inputRef as LegacyRef<HTMLInputElement>}
            type="text"
            placeholder="Cari berdasarkan judul"
            py="6"
          />
          <InputRightElement mt="1" mr="1">
            <Icon
              icon="material-symbols:search"
              width="24"
              height="24"
              onClick={handleClickSearch}
              style={{ cursor: "pointer" }}
            />
          </InputRightElement>
        </InputGroup>
        {isLoadingPartial ? (
          <LoadingLayout />
        ) : searchResults.length === 0 ? (
          <Text fontSize="20px">No search results found.</Text>
        ) : (
          <Flex direction="column" justify="center" p={4}>
            <Text fontSize="20px">Showing {searchResults.length} results</Text>
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
