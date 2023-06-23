import { Flex, HStack, Heading, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex p={5} h="1fr" overflow={"hidden"} w="100%">
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <HStack>
            <Heading
              as="h1"
              size={"2xl"}
              color="gray.50"
              paddingInline={2}
              fontFamily={"Dancing Script"}
            >
              Alexander Bartman
            </Heading>
          </HStack>
        </Stack>
        <Text fontSize="sm" color="#ffffff">
          &copy; {new Date().getFullYear()} Nicholas Zewe Web Developement. All
          rights reserved.
        </Text>
      </Stack>
    </Flex>
  );
};

export default Footer;
