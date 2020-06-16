import { gql } from "@apollo/client";
import { VideoQuery, VideoQueryVariables, AllVideosQuery } from "db-types";
import { Heading, Stack, Box, AspectRatioBox, Flex, PseudoBox } from "@chakra-ui/core";
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

export const getStaticPaths = async () => {
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
  const { title, videoUrl, thumbnail: { url } } = video;

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
          bgImage: `url(${url})`,
          bgSize: "cover",
          bgPos: "center center",
          // @ts-ignore
          filter: 'blur(5px)',
        }}
      >
        <PageLayout>
          <Heading position="relative" zIndex={1} as="h1">{title}</Heading>
        </PageLayout>
      </PseudoBox>
      <PageLayout>
        <Stack spacing={16} mt="16">
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
    </Box >
  );
};

export default Video;
