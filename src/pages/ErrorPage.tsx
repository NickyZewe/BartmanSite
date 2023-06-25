import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { NavLink, isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Flex
      p={5}
      align={"center"}
      justify={"center"}
      direction="column"
      flex="1"
      bgGradient="linear(to-bl,#030303 , #6c6c6c, #030303 )"
    >
      <VStack>
        <Box h={"100%"} justifyContent={"center"}>
          <Heading color={"#ffffff"} py={1}>
            Oops
          </Heading>
          <Text color={"#ffffff"} py={5}>
            {isRouteErrorResponse(error)
              ? "This page could not be found."
              : "An unexpected error occured."}
          </Text>
          <NavLink to={"/"}>
            <Button
              fontWeight="light"
              fontSize="2xl"
              fontFamily={"open-sans"}
              variant={"outline"}
            >
              Back to Home Page
            </Button>
          </NavLink>
        </Box>
      </VStack>
    </Flex>
  );
};

export default ErrorPage;
