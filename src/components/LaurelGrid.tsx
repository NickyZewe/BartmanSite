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
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={10}>
        {laurel.map((laurel) => (
          <Image key={laurel.id} src={laurel.image} loading="lazy" p={5} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductGrid;
