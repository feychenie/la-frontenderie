import { useMemo } from "react";
import { ApolloProvider } from "@apollo/client";
import "typeface-jetbrains-mono";
import Head from "next/head";

import {
  ThemeProvider,
  CSSReset,
  Flex,
  Box,
  ColorModeProvider,
} from "@chakra-ui/core";

import { createClient } from "lib/apolloClient";
import theme from "lib/theme";
import { Header } from "lib/components/Header";

function laFrontenderie({ Component, pageProps }) {
  const client = useMemo(() => {
    return createClient();
  }, []);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Flex direction="column" minH="100vh">
            <Head>
              <title>
                Frontenderie - La fabrique à développeurs frontend !
              </title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header px={{ xs: 4, md: 8 }} />
            <Component {...pageProps} />
            <Box as="footer" mt="auto" py="8" px={{ xs: 4, md: 8 }}>
              La Frontenderie 2020
            </Box>
          </Flex>
        </ColorModeProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default laFrontenderie;
