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
              color="fg.muted"
              fontFamily={"open-sans"}
              textAlign={"justify"}
            >
              Alexander Bartman, an acclaimed Director, Producer, and Writer
              based in Pittsburgh, Pennsylvania. With a degree in Cinema
              Production, his expertise spans Short Films, Feature Films,
              Documentaries, Promos & Commercials, and Voice-Over Work. Look out
              for his highly anticipated debut feature film, "Closing Time,"
              releasing in Summer 2022.
            </Text>
          </Stack>
          <Stack spacing="3">
            <Stack direction={{ base: "column", md: "row" }} spacing="3">
              <NavLink to={"/portfolio"}>
                <Button
                  variant="primary"
                  size={{ base: "lg", md: "xl" }}
                  fontSize={{ base: "lg", md: "xl" }}
                  color="fg.muted"
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
                  color="fg.muted"
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
                  color="fg.muted"
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
            objectPosition={{ base: "center", lg: "left" }}
            src="/images/headshot2.png"
            alt="Alexander Bartman Headshot"
            borderRadius="xl"
          />
        </AspectRatio>
      </SimpleGrid>
    </Container>
  );
};

export default AboutHero;
