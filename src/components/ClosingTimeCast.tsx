import {
  Avatar,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import { castMembers } from "../utilities/castData";

const ClosingTimeCast = () => {
  return (
    <Container py={{ base: "16", md: "24" }} w={"80vw"}>
      <Heading
        size={{ base: "md", md: "xl" }}
        fontFamily={"open-sans"}
        fontWeight={"light"}
        pb={10}
      >
        Meet the cast
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        columnGap="8"
        rowGap={{ base: "10", lg: "12" }}
        flex="1"
      >
        {castMembers.map((cast) => (
          <Stack key={cast.id} spacing={{ base: "4", md: "5" }} direction="row">
            <Avatar src={cast.image} boxSize={{ base: "24", md: "32" }} />
            <Stack spacing="4">
              <Stack>
                <Box>
                  <Text fontWeight="medium" fontSize="lg">
                    {cast.name}
                  </Text>
                  <Text color="#FFFFFF">{cast.role}</Text>
                </Box>
                <Text color="#FFFFFF">{cast.bio}</Text>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ClosingTimeCast;
