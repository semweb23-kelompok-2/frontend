import {
  Flex,
  Heading,
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { LegacyRef, useRef } from "react";
import { MainLayout } from "@/components/layout";
import { useRouter } from "next/router";

export default function Home() {
  const toast = useToast();
  const router = useRouter();
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

  function handleClickAll() {
    router.push(`/search?type=all`);
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
        <InputGroup maxW="640px" alignItems="center">
          <Input
            ref={inputRef as LegacyRef<HTMLInputElement>}
            type="text"
            placeholder="Cari berdasarkan judul"
            py="6"
          />
          <InputRightElement mt="1" mr="1">
            <Icon icon="material-symbols:search" width="24" height="24" />
          </InputRightElement>
        </InputGroup>
        <Flex gap="4">
          <Button w="max-content" px="12" onClick={handleClickSearch}>
            Cari Game
          </Button>
          <Button
            variant="secondary"
            w="max-content"
            px="12"
            onClick={handleClickAll}
          >
            Semua Game
          </Button>
        </Flex>
      </Flex>
    </MainLayout>
  );
}
