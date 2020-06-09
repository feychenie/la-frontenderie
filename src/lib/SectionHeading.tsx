import { Heading } from '@chakra-ui/core';

const SectionHeading = ({ children, ...props }) => (
    <Heading size="xl" {...props}>
      {children}
    </Heading>
  );

  export default SectionHeading;