import { MainLayout } from "@/components/layout";
import { Box } from "@chakra-ui/react";

function Search() {
  return (
    <MainLayout title="KukusanFinder - Search">
      <Box bg="red" m="auto" w="max-content">
        Search result page
      </Box>
    </MainLayout>
  );
}

export default Search;
