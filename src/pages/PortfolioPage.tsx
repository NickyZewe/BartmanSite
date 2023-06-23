import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import { ProductGrid } from "../components/ProductGrid";
import { products } from "../utilities/productData";

const PortfolioPage = () => {
  return (
    <Flex>
      <VStack>
        <Heading size="3xl" color={"black"} pt={5}>
          Shop
        </Heading>
        <Box
          maxW="7xl"
          mx="auto"
          px={{ base: "4", md: "8", lg: "12" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <ProductGrid>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </Box>
      </VStack>
    </Flex>
  );
};

export default PortfolioPage;
