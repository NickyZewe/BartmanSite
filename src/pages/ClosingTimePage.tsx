import { Box } from "@chakra-ui/react";
import ClosingTimeHero from "../components/ClosingTimeHero";
import ClosingTimeVideos from "../components/ClosingTimeVideos";
import { Gallery } from "../components/Gallery";
import { images } from "../utilities/imageData";

const ClosingTimePage = () => {
  return (
    <>
      <ClosingTimeHero />
      <ClosingTimeVideos />
      <Box
        maxW="3xl"
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Gallery images={images} />
      </Box>
    </>
  );
};

export default ClosingTimePage;
