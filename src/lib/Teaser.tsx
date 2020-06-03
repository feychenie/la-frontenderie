import { Box, Heading, Text, Flex, Stack } from '@chakra-ui/core';
import Image from 'lib/Image';
import NextLink from 'next/link';

interface TeaserProps { 
    title: string;
    summary: string;
    media?: {url: string; alt?: string};
    href: string;
    url: string
}

const Teaser:React.FC<TeaserProps> =  props => {

    const { title, summary, media, href, url } = props;

    return (
        <NextLink href={href} as={url} passHref>
            <Box bg="gray.100" p="6" display="block" as="a">
                <Stack spacing="4">
                    {media && <Image src={media.url} alt={media.alt} />}
                    <Heading>{title}</Heading>
                    <Text>{summary}</Text>
                </Stack>
            </Box>
        </NextLink>
    )
};

export default Teaser;