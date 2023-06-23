import {
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <Flex
      p={5}
      h="1fr"
      overflow={"visible"}
      w="100%"
      m={0}
      align={"center"}
      justify={"flex-start"}
    >
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<RxHamburgerMenu />}
          border={"bold"}
          variant={"outline"}
          fontSize={"3xl"}
          color="gray.50"
          outlineColor={"gray.50"}
          m={1}
          mr={3}
        />

        <MenuList fontFamily={"open-sans"} fontSize={"lg"}>
          <NavLink to={"/"}>
            <MenuItem color="gray.50">Home</MenuItem>
          </NavLink>
          <NavLink to={"/about"}>
            <MenuItem color="gray.50">About</MenuItem>
          </NavLink>
          <NavLink to={"/portfolio"}>
            <MenuItem color="gray.50">Portfolio</MenuItem>
          </NavLink>
          <NavLink to={"/arizonabayproductions"}>
            <MenuItem color="gray.50">Arizona Bay Productions</MenuItem>
          </NavLink>
          <NavLink to={"/closingtime"}>
            <MenuItem color="gray.50">Closing Time</MenuItem>
          </NavLink>
          <NavLink to={"/contact"}>
            <MenuItem color="gray.50">Contact Me</MenuItem>
          </NavLink>
        </MenuList>
      </Menu>
      <Spacer />

      <NavLink to={"/"}>
        <Flex>
          <Heading
            as="h1"
            size={"xl"}
            color="gray.50"
            paddingInline={2}
            fontFamily={"Open-sans"}
            fontWeight={"light"}
            overflowWrap={"inherit"}
          >
            Alexander Bartman
          </Heading>
        </Flex>
      </NavLink>

      <Spacer />
      <Spacer />
    </Flex>
  );
};

export default NavBar;
