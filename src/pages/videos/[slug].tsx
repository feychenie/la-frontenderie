import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { VideoQuery, VideoQueryVariables, AllVideosQuery } from "db-types";
import { Heading, Stack, Text, Box, AspectRatioBox } from "@chakra-ui/core";
import { PageLayout } from "lib/components/PageLayout";
import ReactPlayer from "react-player";
import { createClient } from "lib/apolloClient";

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

const ALL_VIDEOS = gql`
  query AllVideos {
    videos {
      slug
    }
  }
`;

export const getStaticProps = async (context) => {
  const { params } = context;
  const client = createClient();
  const video = await client.query<VideoQuery, VideoQueryVariables>({
    query: VIDEO_QUERY, variables: {
      // @ts-ignore
      slug: params.slug,
    },
  }).then(resp => resp.data.video)

  return {
    props: { video }
  }
}

export const getStaticPaths = async (context) => {
  const client = createClient();
  const videos = await client.query<AllVideosQuery>({
    query: ALL_VIDEOS
  }).then(resp => resp.data.videos)
  return {
    paths: videos.map(v => ({ params: { slug: v.slug } })),
    fallback: false
  }
}


const Video = function Article({ video }) {
  const { title, videoUrl } = video;
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
