import {
  Flex,
  Heading,
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { LegacyRef, useRef } from "react";
import { MainLayout } from "@/components/layout";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>();

  function handleClick() {
    if (inputRef && inputRef.current) {
      router.push(`/search?q=${inputRef.current.value}`);
    }
  }

  return (
    <MainLayout
      title="KukusanFinder - Find"
      color="white"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        w={{ base: "90vw", md: "75vw" }}
        flexDirection="column"
        gap="6"
        alignItems="center"
      >
        <Box m="auto">
          <Heading textAlign="center" mb="2">
            Kukusan
            <Box as="span" color="blue.700">
              Finder
            </Box>
          </Heading>
          <Text textAlign="center">
            Cari game yang tersedia dalam katalog Steam disini
          </Text>
        </Box>
        <InputGroup>
          <Input
            ref={inputRef as LegacyRef<HTMLInputElement>}
            type="text"
            placeholder="Cari berdasarkan judul"
          />
          <InputRightElement mr="2">
            <Icon icon="material-symbols:search" width="24" height="24" />
          </InputRightElement>
        </InputGroup>
        <Button w="max-content" px="12" onClick={handleClick}>
          Cari Game
        </Button>
      </Flex>
    </MainLayout>
  );
}
