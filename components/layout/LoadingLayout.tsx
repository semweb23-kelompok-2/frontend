import { Box, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

function LoadingCircle() {
  return (
    <Box
      as={motion.div}
      m="auto"
      w="6"
      h="6"
      bg="white"
      animate={{
        opacity: 100,
        x: [-30, 30, -30],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["50%", "50%", "20%", "20%", "50%"],
        transition: {
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0.2,
        },
      }}
    />
  );
}

function LoadingLayout() {
  return (
    <Flex
      flexDirection="column"
      gap="4"
      h="calc(100vh - 64px)"
      justifyContent="center"
      alignItems="center"
    >
      <Heading>
        Kukusan
        <Box as="span" color="blue.700">
          Finder
        </Box>
      </Heading>
      <Flex gap="4">
        <LoadingCircle />
        <LoadingCircle />
        <LoadingCircle />
        <LoadingCircle />
        <LoadingCircle />
      </Flex>
    </Flex>
  );
}

export default LoadingLayout;
