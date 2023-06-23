import { Flex, VStack, Spacer, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <Flex direction="column" flex="1" justify={"center"}>
      <VStack spacing={0}>
        <NavBar />
        <Spacer />
        <Box h={"100%"} justifyContent={"center"}>
          <Outlet />
        </Box>
        <Footer />
      </VStack>
    </Flex>
  );
};

export default Layout;
