import { gql, useQuery } from "@apollo/client";
import { ArticlesHomeQuery, QaHomeQuery, VideosHomeQuery } from "db-types";
import Teaser from "lib/components/Teaser";
import SectionHeading from "lib/components/SectionHeading";
import { default as NextLink } from "next/link";

import { Box, Stack, SimpleGrid, Heading, Text, Link } from "@chakra-ui/core";
import { createClient } from "lib/apolloClient";

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

export const getStaticProps = async () => {
  const client = createClient();
  const articles = await client.query<ArticlesHomeQuery>({ query: ARTICLES_QUERY }).then(resp => resp.data.articles)
  const videos = await client.query<VideosHomeQuery>({ query: VIDEOS_QUERY }).then(resp => resp.data.videos)
  const faq = await client.query<QaHomeQuery>({ query: QA_QUERY }).then(resp => resp.data.qAs)

  return {
    props: { articles, videos, faq }
  }
}

export default function Home(props) {

  const { articles = [], videos = [], faq = [] } = props;
  return (
    <SimpleGrid minChildWidth="24rem" spacing={10}>
      <Stack spacing={8}>
        <SectionHeading>Articles</SectionHeading>
        <Stack spacing={4} shouldWrapChildren>
          {articles.map((article) => (
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
          {videos.map((v) => {
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
          {faq.map((qa) => (
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
