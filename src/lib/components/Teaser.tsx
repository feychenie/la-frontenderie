import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  AspectRatioBox,
  useColorMode,
} from "@chakra-ui/core";

import Image from "lib/components/Image";
import NextLink from "next/link";

interface TeaserProps {
  title: string;
  summary: string;
  media?: { url: string; alt?: string };
  href: string;
  url: string;
}

const Teaser: React.FC<TeaserProps> = (props) => {
  const { title, summary, media, href, url } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <NextLink href={href} as={url} passHref>
      <Box
        bg={colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.400"}
        display="block"
        as="a"
        position="relative"
      >
        {media && <Image src={media.url} alt={media.alt} />}
        {!media && (
          <AspectRatioBox ratio={4 / 3}>
            <Box></Box>
          </AspectRatioBox>
        )}
        <Stack
          bg="blackAlpha.800"
          p="4"
          spacing="4"
          position="static"
          left="10"
          right="10"
          bottom="10"
          color="white"
        >
          <Heading fontSize="2xl" as="h3">
            {title}
          </Heading>
          <Text>{summary}</Text>
        </Stack>
      </Box>
    </NextLink>
  );
};

export default Teaser;
