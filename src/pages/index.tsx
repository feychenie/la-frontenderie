import Head from "next/head";

import {
  Button,
  Flex,
  Box,
  Link,
  Stack,
  SimpleGrid,
  Heading,
} from "@chakra-ui/core";

const SectionHeading = ({ children, ...props }) => (
  <Heading size="xl" {...props}>
    {children}
  </Heading>
);

const Teaser = ({ children, ...props }) => (
  <Box bg="gray.100" p="6" {...props}>
    {children}
  </Box>
);

export default function Home() {
  return (
    <Flex px={8} direction="column" minH="100vh">
      <Head>
        <title>Frontenderie - La fabrique à développeurs frontend !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex as="header" py={8}>
        <Heading
          as="div"
          size="lg"
          textShadow="4px 5px 0px #FFCC005E, -6px 3px 0px #00FFFF85, -3px -3px 0px #FF00F56E;"
        >
          La Frontenderie
        </Heading>

        <Stack as="nav" ml="auto" isInline fontFamily="heading" spacing={8}>
          <Link>FAQ</Link>
          <Link>Vidéos</Link>
          <Link>Articles</Link>
          <Link>#NEXT</Link>
        </Stack>
      </Flex>
      <SimpleGrid minChildWidth="20rem" spacing={10}>
        <Stack spacing={8}>
          <SectionHeading>Articles</SectionHeading>
          <Stack spacing={4}>
            <Teaser>Ici il y aura un truc</Teaser>
          </Stack>
        </Stack>
        <Stack spacing={8}>
          <SectionHeading>Vidéos</SectionHeading>
          <Stack spacing={4}>
            <Teaser>Une video ici bientôt</Teaser>
          </Stack>
        </Stack>
        <Stack spacing={8}>
          <SectionHeading>FAQ</SectionHeading>
          <Stack spacing={4}>
            <Teaser>Des questions fréquentes arrivent bientôt!</Teaser>
          </Stack>
        </Stack>
      </SimpleGrid>

      <Box as="footer" mt="auto" py="8">
        La Frontenderie 2020
      </Box>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Flex>
  );
}
