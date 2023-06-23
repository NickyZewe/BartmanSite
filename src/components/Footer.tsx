import {
  Box,
  Flex,
  VStack,
  Heading,
  IconButton,
  Link,
  Stack,
  Text,
  HStack,
} from "@chakra-ui/react";
import {
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Flex p={5} h="1fr" overflow={"hidden"} w="100%">
      <Stack spacing={{ base: "4", md: "5" }}>
        <Heading
          as="h1"
          size={"xl"}
          color="gray.50"
          paddingInline={2}
          fontFamily={"Open-sans"}
          fontWeight={"light"}
        >
          Alexander Bartman
        </Heading>

        <HStack>
          <IconButton
            as={Link}
            href="https://www.linkedin.com/in/alexander-bartman-b5b093204"
            isExternal
            icon={<FaLinkedin />}
            m={1}
            aria-label="Linkedin Link"
            isRound
            variant={"outline"}
            fontSize={"2xl"}
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
            variant={"outline"}
            fontSize={"2xl"}
            size={"lg"}
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
            variant={"outline"}
            fontSize={"2xl"}
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
            variant={"outline"}
            fontSize={"2xl"}
            size={"lg"}
            border={"2px"}
          />
          <IconButton
            as={Link}
            href="https://www.instagram.com/bartman_57/?hl=en"
            isExternal
            icon={<FaInstagram />}
            m={1}
            aria-label="Instagram Link"
            isRound
            variant={"outline"}
            fontSize={"2xl"}
            size={"lg"}
            border={"2px"}
          />
        </HStack>
        <Text fontSize="sm" color="#ffffff">
          &copy; {new Date().getFullYear()} Nicholas Zewe Web Developement. All
          rights reserved.
        </Text>
      </Stack>
    </Flex>
  );
};

export default Footer;
