import { gql, useQuery } from "@apollo/client";
import { ArticlesHomeQuery, QaHomeQuery, VideosHomeQuery } from "db-types";
import Teaser from "lib/Teaser";
import SectionHeading from "lib/SectionHeading";
import { default as NextLink } from "next/link";

import { Box, Stack, SimpleGrid, Heading, Text, Link } from "@chakra-ui/core";

const ARTICLES_QUERY = gql`
  query ArticlesHome {
    articles(orderBy: publishedAt_DESC) {
      id
      title
      slug
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
      id
      question
      slug
      answershort
      answermedium
    }
  }
`;

const VIDEOS_QUERY = gql`
  query VideosHome {
    videos(first: 3, orderBy: publishedAt_DESC) {
      id
      title
      slug
      videoUrl
      source
      thumbnail {
        url
      }
    }
  }
`;

export default function Home() {
  const {
    data: articlesData,
    loading: articlesLoading,
    error: articlesError,
  } = useQuery<ArticlesHomeQuery>(ARTICLES_QUERY);

  const { data: QAData, loading: QALoading, error: QAError } = useQuery<
    QaHomeQuery
  >(QA_QUERY);

  const { data: videosData } = useQuery<VideosHomeQuery>(VIDEOS_QUERY);

  return (
    <SimpleGrid minChildWidth="16rem" spacing={10}>
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
                url={`/articles/${article.slug}`}
              />
            ))}
        </Stack>
      </Stack>
      <Stack spacing={8}>
        <SectionHeading>Vidéos</SectionHeading>
        <Stack spacing={4} shouldWrapChildren>
          {videosData?.videos?.map((v) => {
            return (
              <Teaser
                key={v.id}
                media={v.thumbnail}
                title={v.title}
                url={`/videos/${v.slug}`}
                href={`/videos/[slug]`}
                summary="on verra"
              />
            );
          })}
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
                url={`/qas/${qa.slug}`}
              />
            ))}
        </Stack>
      </Stack>
    </SimpleGrid>
  );
}
