import { default as NextLink } from "next/link";
import fetch from "isomorphic-unfetch";
import {
  ThemeProvider,
  theme,
  CSSReset,
  Flex,
  Heading,
  Stack,
  Link,
  Box,
  ColorModeProvider,
} from "@chakra-ui/core";
import "typeface-jetbrains-mono";

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Head from "next/head";
import { useMemo } from "react";
import MainIcon from 'lib/icons/Main';

function MyApp({ Component, pageProps }) {
  const client = useMemo(() => {
    console.log("new client");
    return new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        fetch,
        uri:
          "https://api-eu-central-1.graphcms.com/v2/ckaecqfrf054h01z7h26b71my/master",
      }),
    });
  }, []);
  const customTheme = useMemo(
    () => ({
      ...theme,
      fonts: {
        heading: `"JetBrains Mono", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
        body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
        mono: `"JetBrains Mono", SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
      },
    }),
    []
  );
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={customTheme}>
        <ColorModeProvider>
          <CSSReset />
          <Flex px={{xs: 4, md: 8}} direction="column" minH="100vh">
            <Head>
              <title>Frontenderie - La fabrique à développeurs frontend !</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <Flex as="header" py={8} direction={{ xs: 'column', md: 'row' }} >
              <NextLink href="/">
                <a>
                  <Heading
                    size="lg"
                    textShadow="
                    4px 5px 0px #FFCC005E, 
                    -6px 3px 0px #00FFFF85, 
                    -3px -3px 0px #FF00F56E;
                  "
                  >
                    La Frontenderie
                </Heading>
                </a>
              </NextLink>
              <Stack
                mt={{ xs: 8, md: 0 }}
                justifyContent={{ xs: "space-evenly", md: "flex-end" }}
                as="nav"
                ml={{ xs: 0, md: "auto" }}
                isInline
                fontFamily="heading"
                spacing={{ xs: 4, md: 8 }}
                shouldWrapChildren
              >
                <NextLink href="#">
                  <Link>FAQ</Link>
                </NextLink>
                <NextLink href="#">
                  <Link>Vidéos</Link>
                </NextLink>
                <NextLink href="#">
                  <Link>Articles</Link>
                </NextLink>
                <NextLink href="#">
                  <Link>#NEXT</Link>
                </NextLink>
              </Stack>
            </Flex>
            <Component {...pageProps} />
            <Box as="footer" mt="auto" py="8">
              La Frontenderie 2020
          </Box>
            <style jsx global>{`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                Helvetica, Arial, sans-serif, "Apple Color Emoji",
                "Segoe UI Emoji", "Segoe UI Symbol";
            }

            * {
              box-sizing: border-box;
            }
          `}</style>
          </Flex>
        </ColorModeProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
