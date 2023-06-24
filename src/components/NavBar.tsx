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

        <MenuList fontFamily={"open-sans"} fontSize={"lg"} bgColor={"#525252"}>
          <NavLink to={"/"}>
            <MenuItem color="gray.50" bgColor={"#525252"}>
              Home
            </MenuItem>
          </NavLink>
          <NavLink to={"/about"}>
            <MenuItem color="gray.50" bgColor={"#525252"}>
              About
            </MenuItem>
          </NavLink>
          <NavLink to={"/portfolio"}>
            <MenuItem color="gray.50" bgColor={"#525252"}>
              Portfolio
            </MenuItem>
          </NavLink>
          <NavLink to={"/arizonabayproductions"}>
            <MenuItem color="gray.50" bgColor={"#525252"}>
              Arizona Bay Productions
            </MenuItem>
          </NavLink>
          <NavLink to={"/closingtime"}>
            <MenuItem color="gray.50" bgColor={"#525252"}>
              Closing Time
            </MenuItem>
          </NavLink>
          <NavLink to={"/contact"}>
            <MenuItem color="gray.50" bgColor={"#525252"}>
              Contact Me
            </MenuItem>
          </NavLink>
        </MenuList>
      </Menu>
      <Spacer />

      <NavLink to={"/"}>
        <Flex flex={1}>
          <Heading
            as="h1"
            size={{ base: "md", sm: "xl" }}
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
    </Flex>
  );
};

export default NavBar;
