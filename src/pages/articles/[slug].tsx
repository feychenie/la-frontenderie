import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { ArticleQuery, ArticleQueryVariables } from "db-types";
import { Heading, Stack, Text } from "@chakra-ui/core";
import { PageLayout } from "lib/PageLayout";

const ARTICLE_QUERY = gql`
  query Article($slug: String!) {
    article(where: { slug: $slug }) {
      id
      summary
      title
      slug
      body
      author {
        name
        avatar {
          url
        }
      }
    }
  }
`;

const Article = function Article(props) {
  const router = useRouter();
  const { data, loading, error } = useQuery<
    ArticleQuery,
    ArticleQueryVariables
  >(ARTICLE_QUERY, {
    variables: {
      // @ts-ignore
      slug: router.query.slug,
    },
  });
  // const { pid } =
  console.log({ data, loading });
  if (loading) return <p>loading</p>;
  if (error) return <p> error</p>;
  const {
    article: { title, summary, body, author },
  } = data;
  return (
    <PageLayout>
      <Stack spacing={8}>
        <Heading>{title}</Heading>
        <Text>{summary}</Text>
        <Text>{body}</Text>
      </Stack>
    </PageLayout>
  );
};

export default Article;
