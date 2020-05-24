import { gql, useQuery } from "@apollo/client";
import { ArticlesHomeQuery } from "db-types";

import { default as NextLink } from "next/link";

import { Box, Stack, SimpleGrid, Heading, Text, Link } from "@chakra-ui/core";

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

const QA_QUERY = gql`
  query QAHomeQuery {
    qAs {
      question
      answershort
      answermedium
      id
    }
  }
`;

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
  const {
    data: articlesData,
    loading: articlesLoading,
    error: articlesError,
  } = useQuery<ArticlesHomeQuery>(ARTICLES_QUERY);
  const { data: QAData, loading: QALoading, error: QAError } = useQuery<any>(
    QA_QUERY
  );

  return (
    <SimpleGrid minChildWidth="20rem" spacing={10}>
      <Stack spacing={8}>
        <SectionHeading>Articles</SectionHeading>
        <Stack spacing={4} shouldWrapChildren>
          {articlesLoading && (
            <Stack spacing={4}>
              <Teaser>
                <p>Les</p>
              </Teaser>
              <Teaser>
                <p>articles</p>
              </Teaser>
              <Teaser>
                <p>arrivent</p>
              </Teaser>
            </Stack>
          )}
          {!articlesLoading &&
            articlesData &&
            articlesData.articles.map((article) => (
              <NextLink
                key={article.id}
                href="/articles/[slug]"
                as={`/articles/${article.id}`}
              >
                <a>
                  <Teaser>
                    <Heading>{article.title}</Heading>
                    <Text>{article.summary}</Text>
                    <Text>By {article.author?.name}</Text>
                  </Teaser>
                </a>
              </NextLink>
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
        <Stack spacing={4} shouldWrapChildren>
          {!QALoading &&
            QAData &&
            QAData.qAs.map((qa) => (
              <NextLink key={qa.id} href="/qas/[slug]" as={`/qas/${qa.id}`}>
                <a>
                  <Teaser>
                    <Heading>{qa.question}</Heading>
                  </Teaser>
                </a>
              </NextLink>
            ))}
        </Stack>
      </Stack>
    </SimpleGrid>
  );
}
