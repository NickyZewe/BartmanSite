import { Box, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ImageWithOverlay } from "./ImageWithOverlay";

const Showcase = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Stack
          height={{ md: "640px" }}
          direction={{ base: "column", md: "row-reverse" }}
          spacing={{ base: "6", md: "10" }}
          align="stretch"
        >
          <ImageWithOverlay
            _hover={{
              transform: "scale(1.03)",
              transition: "transform .15s ease-in",
              cursor: "pointer",
            }}
            onClick={() => navigate("/about")}
            flex="1"
            objectPosition="top center"
            objectFit={"contain"}
            title="About Me"
            src="/images/headshot.png"
            alt="Lovely Image"
          />
          <Stack spacing={{ base: "6", md: "10" }} maxW={{ md: "400px" }}>
            <ImageWithOverlay
              _hover={{
                transform: "scale(1.03)",
                transition: "transform .15s ease-in",
                cursor: "pointer",
              }}
              onClick={() => navigate("/portfolio")}
              spacing="4"
              title="Portfolio"
              src="/images/closing-time/closingtime2.png"
              alt="Lovely Image"
            />
            <ImageWithOverlay
              _hover={{
                transform: "scale(1.03)",
                transition: "transform .15s ease-in",
                cursor: "pointer",
              }}
              onClick={() => navigate("/closingtime")}
              spacing="4"
              title="Arizona Bay Productions"
              src="/images/closing-time/closingtime1.png"
              alt=""
              objectPosition="top center"
            />
          </Stack>
        </Stack>
      </Box>
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Stack
          height={{ md: "640px" }}
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "6", md: "10" }}
          align="stretch"
        >
          <ImageWithOverlay
            _hover={{
              transform: "scale(1.03)",
              transition: "transform .15s ease-in",
              cursor: "pointer",
            }}
            onClick={() => navigate("/portfolio")}
            flex="1"
            objectPosition="top center"
            title="Closing Time"
            src="/images/closing-time/poster.png"
            alt="Closing Time movie poster"
          />
          <Stack spacing={{ base: "6", md: "10" }} maxW={{ md: "400px" }}>
            <ImageWithOverlay
              _hover={{
                transform: "scale(1.03)",
                transition: "transform .15s ease-in",
                cursor: "pointer",
              }}
              onClick={() => navigate("/portfolio")}
              spacing="4"
              title="Contact Me"
              src="/images/photos-set/set2.png"
              alt="Lovely Image"
              h={"100%"}
            />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Showcase;
