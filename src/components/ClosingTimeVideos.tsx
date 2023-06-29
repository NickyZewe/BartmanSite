import {
  AspectRatio,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { images } from "../utilities/imageData";
import { Gallery } from "./Gallery";

const ClosingTimeVideos = () => {
  return (
    <>
      <Container py={{ base: "16", md: "24" }} w={"80vw"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={16}>
          <AspectRatio maxW="560px" ratio={4 / 3}>
            <iframe
              src="https://www.youtube.com/embed/4HaMf4Sj9UE?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </AspectRatio>
          <Stack
            spacing={{ base: "8", md: "12" }}
            justifyContent="center"
            direction={{ base: "column", md: "row" }}
          >
            <Stack spacing={{ base: "4", md: "6" }}>
              <Text
                fontSize={{ base: "lg", md: "2xl" }}
                textColor="#FFFFFF"
                textAlign={"justify"}
                fontFamily={"open-sans"}
                fontWeight={"light"}
                border={"0.px solid black;"}
                p={3}
                borderRadius={10}
                boxShadow={"dark-lg"}
                _hover={{
                  transform: "scale(1.03)",
                  transition: "transform .25s ease-in",
                }}
              >
                Set over the course of a day, escaping mediocrity is all you can
                do. Jack and Fran are two lost souls in a dying city. Jack, a
                down and out painter, seeks an idealistic love and inspiration,
                as Fran, a former ballerina, lives in a world of what could have
                been. Meeting an unexpected way, they both choose to be open as
                they navigate conversations from jazz through the minutiae of
                life.
              </Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Container py={{ base: "16", md: "24" }} w={"80vw"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={16}>
          <Stack spacing={{ base: "8", md: "12" }} justifyContent="center">
            <Stack spacing={{ base: "4", md: "6" }}>
              <Heading
                size={{ base: "md", md: "xl" }}
                fontFamily={"open-sans"}
                fontWeight={"light"}
              >
                Trailer Two
              </Heading>
            </Stack>
          </Stack>
          <AspectRatio maxW="560px" ratio={4 / 3}>
            <iframe
              src="https://www.youtube.com/embed/L85Cu4GHOJA"
              title="YouTube video player"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </AspectRatio>
        </SimpleGrid>
      </Container>

      <Container py={{ base: "16", md: "24" }} w={"80vw"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={16}>
          <AspectRatio maxW="560px" ratio={4 / 3}>
            <iframe
              src="https://www.youtube.com/embed/l-wSxwoQhSM"
              title="YouTube video player"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </AspectRatio>
          <Stack spacing={{ base: "8", md: "12" }} justifyContent="center">
            <Stack spacing={{ base: "4", md: "6" }}>
              <Heading
                size={{ base: "md", md: "xl" }}
                fontFamily={"open-sans"}
                fontWeight={"light"}
              >
                Behind the scenes
              </Heading>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ClosingTimeVideos;
