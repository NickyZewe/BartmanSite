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
              <Text fontSize={{ base: "lg", md: "3xl" }} color="white">
                An independant feature film.
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                textColor="#FFFFFF"
                textAlign={"justify"}
                fontFamily={"open-sans"}
                fontWeight={"light"}
                border={"0px solid black;"}
                p={3}
                borderRadius={10}
                boxShadow={"dark-lg"}
                _hover={{
                  transform: "scale(1.03)",
                  transition: "transform .25s ease-in",
                }}
              >
                Over the course of a day, a man and woman, unexpectedly meet
                spending the rest of the night contemplating existence and their
                qualms of life.
              </Text>
            </Stack>
          </Stack>
          <AspectRatio maxW="560px" ratio={10 / 13}>
            <Image
              objectFit="cover"
              src="/images/closing-time/poster.png"
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
