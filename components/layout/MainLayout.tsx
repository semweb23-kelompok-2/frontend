import { mainLayoutProps } from "@/types/global";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";

function MainLayout(props: mainLayoutProps): ReactNode {
  return (
    <>
      <Head>
        <title>{props.title ?? "KukusanFinder"}</title>
      </Head>
      <Box {...props} p="4" minH="100vh">
        {props.children}
      </Box>
    </>
  );
}

export default MainLayout;
