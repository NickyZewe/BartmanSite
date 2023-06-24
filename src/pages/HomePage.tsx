import {
  Container,
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
      <Image
        alt="Placeholder Image"
        src="/public/images/photos-set/set3.png"
        objectFit="cover"
        objectPosition="center -140px"
        maxH={{ base: "sm", md: "lg" }}
        width="full"
        borderRadius={10}
        boxShadow={"dark-lg"}
      />
      <Container py={{ base: "16", md: "24" }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={16} rowGap={4}>
          <Heading
            size={{ base: "md", md: "xl" }}
            fontFamily={"open-sans"}
            color={"#ffffff"}
          >
            Captivating storytelling at its finest
          </Heading>
          <Stack spacing={{ base: "6", md: "8" }} justifyContent="center">
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              textAlign={"justify"}
              fontFamily={"open-sans"}
              fontWeight={"bold"}
              border={"0.px solid black;"}
              p={3}
              borderRadius={10}
              boxShadow={"dark-lg"}
              _hover={{
                transform: "scale(1.03)",
                transition: "transform .25s ease-in",
              }}
            >
              Alexander Bartman is a Director, Producer, and Writer currently
              based in Pittsburgh, Pennsylvania. He has a bachelor’s degree in
              Cinema Production from Point Park University. He specializes in
              writing scripts for Short Films, Feature Films, Documentaries,
              Promos & Commercials, and Voice-Over Work. Alexander directed his
              first feature film, Closing Time, in 2021 which is set to release
              in the Summer of 2022.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Showcase />
    </>
  );
};

export default HomePage;
