import { defineStyleConfig, defineStyle } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"; // import utility to set light and dark mode props

const kukusanFinder = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    color: mode(`white`, `black`)(props),
    bg: mode(`${c}.700`, `${c}.700`)(props),
    _hover: {
      bg: mode(`${c}.800`, `${c}.800`)(props),
    },
    _active: {
      bg: mode(`${c}.900`, `${c}.900`)(props),
    },
  };
});

const button = defineStyleConfig({
  defaultProps: {
    size: "md",
    variant: "kukusanFinder",
    colorScheme: "blue",
  },
  variants: { kukusanFinder },
});

export default button;
