import { gql, useQuery } from "@apollo/client";
import { ArticlesHomeQuery, QaHomeQuery } from "db-types";
import Teaser from 'lib/Teaser';
import SectionHeading from 'lib/SectionHeading';
import { default as NextLink } from "next/link";

import {
  Box,
  Stack,
  SimpleGrid,
  Heading,
  Text,
  Link
} from "@chakra-ui/core";

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
  query QAHome {
    qAs {
      question
      answershort
      answermedium
      id
    }
  }
`;

export default function Home() {
  const {
    data: articlesData,
    loading: articlesLoading,
    error: articlesError,
  } = useQuery<ArticlesHomeQuery>(ARTICLES_QUERY);
  
  const { data: QAData, loading: QALoading, error: QAError } = useQuery<QaHomeQuery>(
    QA_QUERY
  );

  return (
    <SimpleGrid minChildWidth="20rem" spacing={10}>
      <Stack spacing={8}>
        <SectionHeading>Articles</SectionHeading>
        <Stack spacing={4} shouldWrapChildren>
          {articlesLoading && (
            <Stack spacing={4}>
              <div>Loading</div>
            </Stack>
          )}
          {!articlesLoading &&
            articlesData &&
            articlesData.articles.map((article) => (
              <Teaser
                key={article.id}
                title={article.title}
                summary={article.summary}
                href="/articles/[slug]"
                url={`/articles/${article.id}`}
              />
            ))}
        </Stack>
      </Stack>
      <Stack spacing={8}>
        <SectionHeading>Vidéos</SectionHeading>
        <Stack spacing={4}>

        </Stack>
      </Stack>
      <Stack spacing={8}>
        <SectionHeading>FAQ</SectionHeading>
        <Stack spacing={4} shouldWrapChildren>
          {!QALoading &&
            QAData &&
            QAData.qAs.map((qa) => (
              <Teaser
                key={qa.id}
                title={qa.question}
                summary={qa.answershort}
                href="/qas/[slug]"
                url={`/qas/${qa.id}`}
              />
            ))}
        </Stack>
      </Stack>
    </SimpleGrid>
  );
}
