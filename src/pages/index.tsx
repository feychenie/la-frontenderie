import Head from "next/head";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import { ArticlesHomeQuery } from "db-types";
const ARTICLES_QUERY = gql`
  query ArticlesHome {
    articles(orderBy: publishedAt_DESC) {
      id
      title
      summary
      author {
        name
      }
    }
  }
`;

import {
  Button,
  Flex,
  Box,
  Stack,
  SimpleGrid,
  Heading,
  Text,
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
  const { data, loading, error } = useQuery<ArticlesHomeQuery>(ARTICLES_QUERY);
  return (
    <SimpleGrid minChildWidth="20rem" spacing={10}>
      <Stack spacing={8}>
        <SectionHeading>Articles</SectionHeading>
        <Stack spacing={4}>
          {loading && <p>loading</p>}
          {!loading &&
            data &&
            data.articles.map((article) => (
              <Link href={`/articles/${article.id}`}>
                <Teaser key={article.id}>
                  <Heading>{article.title}</Heading>
                  <Text>{article.summary}</Text>
                  <Text>By {article.author?.name}</Text>
                </Teaser>
              </Link>
            ))}
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
  );
}
