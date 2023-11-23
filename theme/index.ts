import { extendTheme } from "@chakra-ui/react";
import { button, input } from "./components";
import { fonts } from "./foundations";

const overrides = {
  components: {
    Input: input,
    Button: button,
  },
  fonts: fonts,
};

export default extendTheme(overrides);
