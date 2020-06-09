import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Heading, Stack, Text } from "@chakra-ui/core";
import { PageLayout } from "lib/PageLayout";

const QA_QUERY = gql`
  query QAQuery($slug: String!) {
    qA(where: { slug: $slug }) {
        question
        slug
        answershort
        answermedium
        id
    }
  }
`;

const Qa = function Qa(props) {
  const router = useRouter();

  const { data, loading, error } = useQuery<any, any>(QA_QUERY, {
    variables: {
      slug: router.query.slug,
    },
  });

  if (loading) return <p>loading</p>;
  if (error) return <p> error</p>;
  const {
    qA: { question, answershort, answermedium },
  } = data;
  return (
    <PageLayout>
      <Stack spacing={8}>
        <Heading>{question}</Heading>
        <Text>{answershort}</Text>
        <Text>{answermedium}</Text>
      </Stack>
    </PageLayout>
  );
};

export default Qa;
