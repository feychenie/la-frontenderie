import { default as NextLink } from "next/link";
import {
  Flex,
  Heading,
  Stack,
  Link,
  useColorMode,
  IconButton,
} from "@chakra-ui/core";

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as="header" py={8} direction={{ xs: "column", md: "row" }}>
      <NextLink href="/">
        <a>
          <Heading
            size="lg"
            textShadow="
              4px 5px 0px #FFCC005E, 
              -6px 3px 0px #00FFFF85, 
              -3px -3px 0px #FF00F56E;
            "
          >
            La Frontenderie
          </Heading>
        </a>
      </NextLink>
      <Stack
        mt={{ xs: 8, md: 0 }}
        justifyContent={{ xs: "space-evenly", md: "flex-end" }}
        alignItems="center"
        as="nav"
        ml={{ xs: 0, md: "auto" }}
        isInline
        fontFamily="heading"
        spacing={{ xs: 4, md: 8 }}
        shouldWrapChildren
      >
        <IconButton
          size="sm"
          variant="outline"
          aria-label="toggle color mode"
          icon={colorMode === "light" ? "moon" : "sun"}
          onClick={toggleColorMode}
          variantColor="yellow"
        />

        <NextLink href="#">
          <Link>FAQ</Link>
        </NextLink>
        <NextLink href="#">
          <Link>Vidéos</Link>
        </NextLink>
        <NextLink href="#">
          <Link>Articles</Link>
        </NextLink>
        <NextLink href="#">
          <Link>#NEXT</Link>
        </NextLink>
      </Stack>
    </Flex>
  );
}
