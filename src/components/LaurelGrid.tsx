import { Box, Image, SimpleGrid } from "@chakra-ui/react";

import { laurel } from "../utilities/laurelData";

const ProductGrid = () => {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {laurel.map((laurel) => (
          <Image key={laurel.id} src={laurel.image} loading="lazy" p={5} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductGrid;
