import {
  AspectRatio,
  Box,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const ContactHero = () => {
  return (
    <Box py={{ base: "16", md: "24" }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={16}>
        <Stack spacing={{ base: "8", md: "12" }} justifyContent="center">
          <AspectRatio ratio={1}>
            <Image
              objectFit="cover"
              src="/images/photos-set/set1.png"
              alt="Lady at work"
              borderRadius="xl"
            />
          </AspectRatio>
        </Stack>
        <Stack spacing={{ base: "4", md: "6" }}>
          <Heading size={{ base: "lg", md: "xl" }} fontFamily={"open-sans"}>
            Contact Information
          </Heading>
          <Heading as={"h5"} size={{ base: "sm" }} fontFamily={"open-sans"}>
            Alexander Bartman
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="fg.muted"
            fontFamily={"open-sans"}
          >
            Email: alexander.bartman726@gmail.com
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="fg.muted"
            fontFamily={"open-sans"}
          >
            Phone: 412-551-3872
          </Text>
          <Heading as={"h5"} size={{ base: "sm" }}>
            Arizona Bay Productions LLC
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="fg.muted"
            fontFamily={"open-sans"}
          >
            Email: arizonabayproductions@gmail.com
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="fg.muted"
            fontFamily={"open-sans"}
          >
            Phone: 412-551-3872
          </Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default ContactHero;
