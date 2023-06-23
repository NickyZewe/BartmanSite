import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <Flex p={5} h="1fr" overflow={"visible"} w="100%" m={0} align={"center"}>
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
          <NavLink to={"/closingtime"}>
            <MenuItem color="gray.50">Closing Time</MenuItem>
          </NavLink>
          <NavLink to={"/arizonabayproductions"}>
            <MenuItem color="gray.50">Arizona Bay Productions</MenuItem>
          </NavLink>
          <NavLink to={"/contact"}>
            <MenuItem color="gray.50">Contact Me</MenuItem>
          </NavLink>
        </MenuList>
      </Menu>
      <Spacer />

      <NavLink to={"/"}>
        <Box alignContent={"center"}>
          <Heading
            as="h1"
            size={"2xl"}
            color="gray.50"
            paddingInline={2}
            fontFamily={"Open-sans"}
            fontWeight={"light"}
            overflowWrap={"inherit"}
          >
            Alexander Bartman
          </Heading>
        </Box>
      </NavLink>

      <Spacer />

      <Box>
        {/* <VStack> */}

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

        {/* </VStack> */}
      </Box>
    </Flex>
  );
};

export default NavBar;
