import { Image as ChakraImage } from '@chakra-ui/core'

const Image = props => {
    const { src, alt, ...rest } = props;
    return (
        <ChakraImage src={src} alt={alt} display="block" width="100%" maxWidth="100%" {...rest} />
    )
}

export default Image;
