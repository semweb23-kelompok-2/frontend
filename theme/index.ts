import { extendTheme } from "@chakra-ui/react";
import { fonts } from "./foundations";

const overrides = {
  fonts: fonts,
};

export default extendTheme(overrides);
