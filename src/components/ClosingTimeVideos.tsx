import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
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
            ></iframe>
          </AspectRatio>
          <Stack
            spacing={{ base: "8", md: "12" }}
            justifyContent="center"
            direction={{ base: "column", md: "row" }}
          >
            <Stack spacing={{ base: "4", md: "6" }}>
              <Heading
                size={{ base: "md", md: "xl" }}
                fontFamily={"open-sans"}
                fontWeight={"light"}
              >
                Trailer One
              </Heading>
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
            ></iframe>
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
            ></iframe>
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
      <Container py={{ base: "16", md: "24" }} w={"80vw"}>
        <Box
          maxW="3xl"
          mx="auto"
          px={{ base: "4", md: "8", lg: "12" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <Gallery images={images} />
        </Box>
      </Container>
    </>
  );
};

export default ClosingTimeVideos;
