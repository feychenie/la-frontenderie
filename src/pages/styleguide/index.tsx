import { Heading, Stack, Box } from "@chakra-ui/core";
import Teaser from "lib/components/Teaser";
import { PageLayout } from "lib/components/PageLayout";

const StyleGuide = function StyleGuide(props) {
  return (
    <PageLayout>
      <Stack spacing="16">
        <Stack spacing="8">
          <Heading as="h1" size="2xl">
            Headings
          </Heading>
          <Stack spacing="2">
            <Heading as="h1" size="2xl">
              H1 style
            </Heading>
            <Heading as="h2" size="xl">
              H2 style
            </Heading>
            <Heading as="h3" size="lg">
              H3 style
            </Heading>
            <Heading as="h4" size="md">
              H4 style
            </Heading>
            <Heading as="h5" size="sm">
              H5 style
            </Heading>
            <Heading as="h6" size="xs">
              H6 style
            </Heading>
          </Stack>
        </Stack>

        <Stack spacing="8">
          <Heading as="h1" size="2xl">
            Teaser
          </Heading>

          <Teaser
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed ultrices justo. Aenean finibus semper imperdiet. "
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed ultrices justo. Aenean finibus semper imperdiet. Vivamus sapien nisi, bibendum sed tellus nec, ornare volutpat ante. Etiam eu convallis elit, et semper elit. Integer tempus pulvinar placerat. Etiam nec dolor ligula. Mauris euismod accumsan ultricies. Vestibulum at sapien consequat, ultricies libero eu, volutpat elit. Aenean vitae purus eget magna tristique tristique eget non nunc. Etiam interdum scelerisque quam, nec laoreet eros maximus nec. "
            media={{
              url: "http://lorempixel.com/400/200/technics/2/",
              alt: " le alt",
            }}
            href="/articles/[slug]"
            url="/articles/ckaeecw800a2001488bxd9ix8"
          />
        </Stack>
      </Stack>
    </PageLayout>
  );
};

export default StyleGuide;
