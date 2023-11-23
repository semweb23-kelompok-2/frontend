import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const kukusanFinder = definePartsStyle({
  field: {
    color: "black",
    bg: "white",
    _focus: {
      bg: "white",
    },
  },
  element: {
    color: "black",
  },
});

const input = defineMultiStyleConfig({
  defaultProps: {
    size: "md",
    variant: "kukusanFinder",
  },
  variants: { kukusanFinder },
});

export default input;
