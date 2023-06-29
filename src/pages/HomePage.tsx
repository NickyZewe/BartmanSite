import {
  Container,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Showcase from "../components/Showcase";
const HomePage = () => {
  return (
    <>
      <Container>
        <Image
          alt="Placeholder Image"
          src="/images/photos-set/set3.png"
          objectFit="cover"
          objectPosition="center"
          maxH={{ base: "sm", md: "lg" }}
          width="full"
          borderRadius={10}
          boxShadow={"dark-lg"}
        />
        <HStack pt={10}>
          <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={16} rowGap={4}>
            <Heading
              size={{ base: "md", md: "xl" }}
              fontFamily={"open-sans"}
              color={"#ffffff"}
              fontWeight={"light"}
            >
              Captivating, immersive storytelling
            </Heading>
            <Stack spacing={{ base: "6", md: "8" }} justifyContent="center">
              <Text
                fontSize={{ base: "lg", md: "xl" }}
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
                Alexander Bartman is a Director and Writer based in Pittsburgh,
                Pennsylvania. He is a graduate of a Cinema Production Major at
                Point Park University with a concentration in directing and
                writing. His first feature Closing Time premiered in 2022.
                Winning Awards and being selected in numerous festivals across
                the globe. Alexander founded the independent production company
                Arizona Bay Productions in 2021, and has future plans to grow
                his business.
              </Text>
            </Stack>
          </SimpleGrid>
        </HStack>
      </Container>
      <Showcase />
    </>
  );
};

export default HomePage;
