import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Heading, Stack, Text } from "@chakra-ui/core";

const QA_QUERY = gql`
  query QAQuery($id: ID!) {
    qA(where: { id: $id }) {
        question
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
      // @ts-ignore
      id: router.query.slug,
    },
  });

  if (loading) return <p>loading</p>;
  if (error) return <p> error</p>;
  const {
    qA: { question, answershort, answermedium },
  } = data;
  return (
    <div>
      <Stack spacing={8}>
        <Heading>{question}</Heading>
        <Text>{answershort}</Text>
        <Text>{answermedium}</Text>
      </Stack>
    </div>
  );
};

export default Qa;
