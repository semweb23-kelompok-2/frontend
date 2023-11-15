import { Flex, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

function MainLayout({ children }: passableComponentProps): ReactNode {
  return (
    <Box p="4" minH='100vh'>
      {children}
    </Box>
  );
}

export default MainLayout;
