import { Flex, VStack, Heading, Button, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, NavLink, useRouteError } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Flex p={5} align={"center"} justify={"center"}>
        <VStack>
          <Heading color={"black"}>Oops</Heading>
          <Text color={"black"}>
            {isRouteErrorResponse(error)
              ? "This page could not be found."
              : "An unexpected error occured."}
          </Text>
          <NavLink to={"/"}>
            <Button
              colorScheme="blue"
              fontWeight="light"
              fontSize="2xl"
              fontFamily={"open-sans"}
            >
              Back to Home Page
            </Button>
          </NavLink>
        </VStack>
      </Flex>
      <Footer />
    </>
  );
};

export default ErrorPage;
