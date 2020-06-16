import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { ArticleQuery, ArticleQueryVariables } from "db-types";
import { Heading, Stack, Text, Box, PseudoBox, Flex, Avatar } from "@chakra-ui/core";
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
      caption {
        url
      }
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
    article: { publishedAt, title, summary, body, author, caption },
  } = data;
  return (
    <Box>
      <PseudoBox as={Flex}
        position="relative"
        height={['100%', '8rem', '14rem', '28rem']}
        py={[10, 0]}
        bg="#070c1591"
        alignItems="center"
        overflow="hidden"
        _before={{
          content: '""',
          display: 'block',
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          ...(caption ? {
            bgImage: `url(${caption.url})`,
            bgSize: "cover",
            bgPos: "center center",
            // @ts-ignore
            filter: 'blur(5px)',
          } : {})
        }}
      >
        <PageLayout>
          <Box position="relative" zIndex={1}>
            <Heading as="h1" >{title}</Heading>
            <Text>
              Publié le {format(new Date(publishedAt), "dd/mm/Y")}
              {author && ` - par ${author.name}`}
            </Text>
          </Box>
        </PageLayout>
      </PseudoBox>
      <PageLayout>
        <Stack spacing={8} mt="10">
          {/* {author && <Text>Par {author.name} {author.avatar && <Avatar src={author.avatar.url} />}</Text>} */}
          <Text>{summary}</Text>
          <Text>{body}</Text>
        </Stack>
      </PageLayout>
    </Box>
  );
};

export default Article;
