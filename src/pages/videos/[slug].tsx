import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { VideoQuery, VideoQueryVariables } from "db-types";
import { Heading, Stack, Text, Box, AspectRatioBox } from "@chakra-ui/core";
import { PageLayout } from "lib/components/PageLayout";
import ReactPlayer from "react-player";

const VIDEO_QUERY = gql`
  query Video($slug: String!) {
    video(where: { slug: $slug }) {
      id
      title
      slug
      videoUrl
      thumbnail {
        url
      }
      source
    }
  }
`;

const Video = function Article(props) {
  const router = useRouter();
  const { data, loading, error } = useQuery<VideoQuery, VideoQueryVariables>(
    VIDEO_QUERY,
    {
      variables: {
        // @ts-ignore
        slug: router.query.slug,
      },
    }
  );
  if (loading) return <p>loading</p>;
  if (error) return <p> error</p>;
  const {
    video: { title, videoUrl },
  } = data;
  return (
    <PageLayout>
      <Stack spacing={16} mt="16">
        <Heading>{title}</Heading>
        <AspectRatioBox ratio={16 / 9}>
          <Box>
            <ReactPlayer
              url={videoUrl}
              width="auto"
              height="auto"
              controls
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
            />
          </Box>
        </AspectRatioBox>
      </Stack>
    </PageLayout>
  );
};

export default Video;
