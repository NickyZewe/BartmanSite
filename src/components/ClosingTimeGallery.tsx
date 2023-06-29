import { Container, Box } from "@chakra-ui/react";
import { images } from "../utilities/imageData";
import { Gallery } from "./Gallery";

const ClosingTimeGallery = () => {
  return (
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
  );
};

export default ClosingTimeGallery;
