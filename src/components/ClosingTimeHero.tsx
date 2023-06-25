import {
  AspectRatio,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const ClosingTimeHero = () => {
  return (
    <>
      <Container py={{ base: "16", md: "24" }} w={"80vw"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={16}>
          <Stack spacing={{ base: "8", md: "12" }} justifyContent="center">
            <Stack spacing={{ base: "4", md: "6" }}>
              <Heading
                size={{ base: "md", md: "xl" }}
                fontFamily={"open-sans"}
                fontWeight={"light"}
              >
                Presenting:
              </Heading>
              <Heading
                size={{ base: "md", md: "xl" }}
                fontFamily={"open-sans"}
                fontWeight={"light"}
              >
                Closing Time
              </Heading>
              <Text fontSize={{ base: "lg", md: "3xl" }} color="fg.muted">
                An independant feature film.
              </Text>
              <Text fontSize={{ base: "lg", md: "3xl" }} color="fg.muted">
                Coming out soon.
              </Text>
            </Stack>
          </Stack>
          <AspectRatio maxW="560px" ratio={10 / 13}>
            <Image
              objectFit="cover"
              src="/public/images/closing-time/poster.png"
              alt="Closing Time movie poster"
              borderRadius={"xl"}
            />
          </AspectRatio>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ClosingTimeHero;