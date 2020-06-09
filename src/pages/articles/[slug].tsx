import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { ArticleQuery, ArticleQueryVariables } from "db-types";
import { Heading, Stack, Text } from "@chakra-ui/core";
import { PageLayout } from "lib/components/PageLayout";
import { format } from "date-fns";

const ARTICLE_QUERY = gql`
  query Article($slug: String!) {
    article(where: { slug: $slug }) {
      id
      publishedAt
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

  if (loading) return <p>loading</p>;
  if (error) return <p> error</p>;
  const {
    article: { publishedAt, title, summary, body, author },
  } = data;
  return (
    <PageLayout>
      <Stack spacing={8}>
        <Heading>{title}</Heading>
        <Text>
          Publié le {format(new Date(publishedAt), "dd/mm/Y")}
          {author ? ` - écrit par ${author.name}` : ""}
        </Text>
        <Text>{summary}</Text>
        <Text>{body}</Text>
      </Stack>
    </PageLayout>
  );
};

export default Article;
