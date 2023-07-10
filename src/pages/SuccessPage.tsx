import { Flex, Stack, Heading, HStack, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const SuccessPage = () => {
  return (
    <Flex p={10}>
      <Stack spacing={{ base: "8", lg: "10" }}>
        <Stack spacing={{ base: "2", lg: "4" }}>
          <Heading
            size="xl"
            color={"#FFFFFF"}
            fontWeight="light"
            fontFamily={"open-sans"}
          >
            Thank you for reaching out,
          </Heading>
          <Heading
            size="xl"
            fontWeight="light"
            fontFamily={"open-sans"}
            color="#FFFFFF"
          >
            we will be in touch soon!
          </Heading>
        </Stack>
        <HStack spacing="3">
          <NavLink to={"/"}>
            <Button
              colorScheme="gray"
              fontWeight="light"
              fontSize="2xl"
              fontFamily={"open-sans"}
            >
              Back to Home Page
            </Button>
          </NavLink>
        </HStack>
      </Stack>
    </Flex>
  );
};

export default SuccessPage;
