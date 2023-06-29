import {
  AspectRatio,
  Button,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const AboutHero = () => {
  return (
    <Container py={{ base: "16", md: "24" }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={16}>
        <Stack spacing={{ base: "8", md: "12" }} justifyContent="center">
          <Stack spacing={{ base: "4", md: "6" }}>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              textColor="#FFFFFF"
              fontFamily={"open-sans"}
              textAlign={"justify"}
            >
              Alexander Bartman is a Director and Writer based in Pittsburgh,
              Pennsylvania. He is a graduate of a Cinema Production Major at
              Point Park University with a concentration in directing and
              writing. His first feature Closing Time premiered in 2022. Winning
              Awards and being selected in numerous festivals across the globe.
              Alexander founded the independent production company Arizona Bay
              Productions in 2021, and has future plans to grow his business.
            </Text>
          </Stack>
          <Stack spacing="3">
            <Stack direction={{ base: "column", md: "row" }} spacing="3">
              <NavLink to={"/portfolio"}>
                <Button
                  variant="primary"
                  size={{ base: "lg", md: "xl" }}
                  fontSize={{ base: "lg", md: "xl" }}
                  textColor="#FFFFFF"
                  fontFamily={"open-sans"}
                  fontWeight={"light"}
                  outlineColor={"fg.muted"}
                  outline={" solid 1px"}
                  _hover={{ bgColor: "white", color: "black" }}
                >
                  View Work
                </Button>
              </NavLink>
              <NavLink to={"/closingtime"}>
                <Button
                  variant="primary"
                  size={{ base: "lg", md: "xl" }}
                  fontSize={{ base: "lg", md: "xl" }}
                  textColor="#FFFFFF"
                  fontFamily={"open-sans"}
                  fontWeight={"light"}
                  outlineColor={"fg.muted"}
                  outline={" solid 1px"}
                  _hover={{ bgColor: "white", color: "black" }}
                >
                  Closing Time
                </Button>
              </NavLink>
              <NavLink to={"/contact"}>
                <Button
                  variant="primary"
                  size={{ base: "lg", md: "xl" }}
                  fontSize={{ base: "lg", md: "xl" }}
                  textColor="#FFFFFF"
                  fontFamily={"open-sans"}
                  fontWeight={"light"}
                  outlineColor={"fg.muted"}
                  outline={" solid 1px"}
                  _hover={{ bgColor: "white", color: "black" }}
                >
                  Contact
                </Button>
              </NavLink>
            </Stack>
          </Stack>
        </Stack>
        <AspectRatio ratio={1}>
          <Image
            objectFit="initial"
            objectPosition={{ base: "center" }}
            src="/images/headshot3.png"
            alt="Alexander Bartman Headshot"
            borderRadius="xl"
          />
        </AspectRatio>
      </SimpleGrid>
    </Container>
  );
};

export default AboutHero;
