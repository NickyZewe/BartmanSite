import {
  Flex,
  Heading,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaVimeo,
  FaYoutube,
} from "react-icons/fa";

import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <Flex
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
      w={"100%"}
    >
      <Stack spacing={{ base: "4", md: "5" }}>
        <Heading
          as="h1"
          size={"lg"}
          color="gray.50"
          paddingInline={2}
          fontFamily={"Open-sans"}
          fontWeight={"light"}
        >
          Alexander Bartman
        </Heading>

        <SimpleGrid columns={{ base: 3, sm: 7 }} gap={{ base: "4", md: "6" }}>
          <IconButton
            as={Link}
            href="https://www.linkedin.com/in/alexander-bartman-b5b093204"
            isExternal
            icon={<FaLinkedin />}
            m={1}
            aria-label="Linkedin Link"
            isRound
            fontSize={"2xl"}
            color={"#f4f8fa"}
            size={"lg"}
            border={"2px"}
          />
          <IconButton
            as={Link}
            href=" https://www.youtube.com/@alexanderbartman1695"
            isExternal
            icon={<FaYoutube />}
            m={1}
            aria-label="YouTube Link"
            isRound
            fontSize={"2xl"}
            size={"lg"}
            color={"#f4f8fa"}
            border={"2px"}
          />
          <IconButton
            as={Link}
            href=" https://vimeo.com/alexanderbartman"
            isExternal
            icon={<FaVimeo />}
            m={1}
            aria-label="Vimeo Link"
            isRound
            fontSize={"2xl"}
            size={"lg"}
            color={"#f4f8fa"}
            border={"2px"}
          />
          <IconButton
            as={Link}
            href="https://www.facebook.com/alex.bartman.56"
            isExternal
            icon={<FaFacebook />}
            m={1}
            aria-label="Facebook Link"
            isRound
            fontSize={"2xl"}
            color={"#f4f8fa"}
            size={"lg"}
            border={"2px"}
          />
          <IconButton
            as={Link}
            href="https://twitter.com/Bartman_57"
            isExternal
            icon={<FaTwitter />}
            m={1}
            aria-label="Twitter Link"
            isRound
            color={"#f4f8fa"}
            fontSize={"2xl"}
            size={"lg"}
            border={"2px "}
          />
          <IconButton
            as={Link}
            href="https://www.instagram.com/bartman_57/?hl=en"
            isExternal
            icon={<BiLogoInstagramAlt />}
            m={1}
            aria-label="Instagram Link"
            isRound
            color={"#f4f8fa"}
            fontSize={"3xl"}
            size={"lg"}
            border={"2px"}
          />
        </SimpleGrid>
        <Text fontSize="sm" color="#ffffff">
          &copy; {new Date().getFullYear()} Nicholas Zewe Web Developement. All
          rights reserved.
        </Text>
      </Stack>
    </Flex>
  );
};

export default Footer;
