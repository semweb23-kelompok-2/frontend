import { MainLayout } from "@/components/layout";
import {
  Text,
  Flex,
  SimpleGrid,
  InputGroup,
  Input,
  InputRightElement,
  Select,
  useToast,
  RadioGroup,
  Stack,
  Radio,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";
import { useState, useEffect, LegacyRef, useRef } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import SearchResultCard from "../components/card/searchResultCard";
import React from "react";
import axios from "axios";
import LoadingLayout from "@/components/layout/LoadingLayout";
import { convertToArray } from "@/utils/stringFormatter";

const baseUrl = "https://backend-oggxhc5l5q-as.a.run.app/api/games";

interface SearchResult {
  app_id: string;
  app_name: string;
  header_image: string;
  genres: string[];
  categories: string[];
  release_date: string;
  positive_ratings: number;
  negative_ratings: number;
}

const SearchResultPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPartial, setisLoadingPartial] = useState(true);
  const [sortOption, setSortOption] = useState("app_name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filters, setFilters] = useState<{
    genres: { label: string; isChecked: boolean }[];
    categories: { label: string; isChecked: boolean }[];
  }>({
    genres: [],
    categories: [],
  });
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

  function handleSortOptionChange(option: string) {
    setSortOption(option);
    fetchSearchResult(query as string, sortOption, sortOrder);
  }

  function handleSortOrderChange(order: string) {
    setSortOrder(order);
    fetchSearchResult(query as string, sortOption, sortOrder);
  }

  function handleGenreChange(selection: string) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      genres: prevFilters.genres.map((genre) => ({
        label: genre.label,
        isChecked:
          genre.label === selection ? !genre.isChecked : genre.isChecked,
      })),
    }));
  }

  function handleCategoryChange(selection: string) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      categories: prevFilters.categories.map((category) => ({
        label: category.label,
        isChecked:
          category.label === selection
            ? !category.isChecked
            : category.isChecked,
      })),
    }));
  }

  const fetchSearchResult = async (
    query: string,
    sortOption: string,
    sortOrder: string
  ): Promise<SearchResult[]> => {
    try {
      const response = await axios.get(
        `${baseUrl}/search?name=${query}&order_by=${sortOption}&order=${sortOrder}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const { bindings } = response.data.results;
      const results: SearchResult[] = !bindings[0].app_id
        ? []
        : bindings.map((binding: any) => ({
            app_id: binding.app_id.value,
            app_name: binding.app_name.value,
            header_image: binding.header_image.value,
            genres: convertToArray(binding.genres.value, ", "),
            categories: convertToArray(binding.categories.value, ","),
            release_date: binding.release_date.value,
            positive_ratings: binding.positive_ratings.value,
            negative_ratings: binding.negative_ratings.value,
          }));

      let sortedResults = results;

      if (sortOption === "positive_ratings") {
        sortedResults = results.sort((a, b) => {
          const valueA = a.positive_ratings;
          const valueB = b.positive_ratings;
          if (sortOrder === "asc") {
            return valueB - valueA;
          } else {
            return valueA - valueB;
          }
        });
      }

      return sortedResults;
    } catch (error) {
      console.error("Error fetching search results: ", error);
      throw error;
    }
  };

  const fetchSearchFilters = async (): Promise<{
    genres: string[];
    categories: string[];
  }> => {
    try {
      const genreResponse = await axios.get(`${baseUrl}/genres`);
      const categoryResponse = await axios.get(`${baseUrl}/categories`);
      const genres = genreResponse.data.results.bindings.map(
        (binding: any) => binding.genre_label.value
      );
      const categories = categoryResponse.data.results.bindings.map(
        (binding: any) => binding.category.value
      );
      return { genres, categories };
    } catch (error) {
      console.error("Error fetching filters: ", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchResults = async () => {
      try {
        if (!isLoading) setisLoadingPartial(true);
        const results = await fetchSearchResult(
          query as string,
          sortOption,
          sortOrder
        );
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
  }, [query, sortOption, sortOrder]);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const filters = await fetchSearchFilters();
        setFilters({
          genres: filters.genres.map((genre) => ({
            label: genre,
            isChecked: false,
          })),
          categories: filters.categories.map((category) => ({
            label: category,
            isChecked: false,
          })),
        });
      } catch (error) {
        console.log("Error fetching filters: ", error);
        throw error;
      }
    };
    fetchFilters();
  }, []);

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
        <Flex direction="column" justify="center" p={4}>
          <Select
            value={sortOption}
            onChange={(x) => handleSortOptionChange(x.target.value)}
          >
            <option value="positive_ratings" style={{ color: "black" }}>
              Relevance
            </option>
            <option value="app_name" style={{ color: "black" }}>
              Name
            </option>
            <option value="release_date" style={{ color: "black" }}>
              Release Date
            </option>
          </Select>

          <RadioGroup onChange={handleSortOrderChange} value={sortOrder}>
            <Stack direction="row">
              <Radio value="asc">Ascending</Radio>
              <Radio value="desc">Descending</Radio>
            </Stack>
          </RadioGroup>
        </Flex>

        <Flex direction="row" justifyContent="space-between">
          {isLoadingPartial ? (
            <LoadingLayout />
          ) : searchResults.length === 0 ? (
            <Text fontSize="20px">No search results found.</Text>
          ) : (
            <Flex direction="column" justify="center" p={4}>
              <Text fontSize="20px">
                Showing {searchResults.length} results
              </Text>
              <SimpleGrid columns={[1, 2]} spacing={4}>
                {searchResults.map((result, index) => (
                  <SearchResultCard
                    key={index}
                    app_id={result.app_id}
                    app_name={result.app_name}
                    header_image={result.header_image}
                    genres={result.genres}
                    categories={result.categories}
                    release_date={result.release_date}
                    positive_ratings={result.positive_ratings}
                    negative_ratings={result.negative_ratings}
                  />
                ))}
              </SimpleGrid>
            </Flex>
          )}
          <Flex direction="column" p={4} maxW="200px">
            <Text fontSize="25px" fontWeight="bold" mb={2}>
              {" "}
              Filter by:
            </Text>
            <CheckboxGroup>
              <Stack spacing={1}>
                <Text fontSize="15px" fontStyle="oblique">
                  Genres
                </Text>
                {filters.genres
                  .filter((genre) =>
                    searchResults.some((result) =>
                      result.genres.includes(genre.label)
                    )
                  )
                  .map((genre) => (
                    <Checkbox
                      key={genre.label}
                      isChecked={genre.isChecked}
                      onChange={() => handleGenreChange(genre.label)}
                    >
                      {genre.label}
                    </Checkbox>
                  ))}
              </Stack>
            </CheckboxGroup>
            <CheckboxGroup>
              <Stack spacing={1} mt={5}>
                <Text fontSize="15px" fontStyle="oblique">
                  Categories
                </Text>
                {filters.categories
                  .filter((category) =>
                    searchResults.some((result) =>
                      result.categories.includes(category.label)
                    )
                  )
                  .map((category) => (
                    <Checkbox
                      key={category.label}
                      isChecked={category.isChecked}
                      onChange={() => handleCategoryChange(category.label)}
                    >
                      {category.label}
                    </Checkbox>
                  ))}
              </Stack>
            </CheckboxGroup>
          </Flex>
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default SearchResultPage;
