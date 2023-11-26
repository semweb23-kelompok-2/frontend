import { Flex, BoxProps } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";

export interface mainLayoutProps extends BoxProps {
  title: string;
}

function MainLayout(props: mainLayoutProps): ReactNode {
  return (
    <>
      <Head>
        <title>{props.title ?? "KukusanFinder"}</title>
      </Head>
      <Flex
        p="4"
        minH="100vh"
        bg="linear-gradient(122deg, #121B30 6.7%, #0D3449 89.76%)"
        {...props}
      >
        {props.children}
      </Flex>
    </>
  );
}

export default MainLayout;
