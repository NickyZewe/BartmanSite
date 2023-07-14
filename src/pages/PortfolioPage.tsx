import { Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import PortfolioCard from "../components/PortfolioCard";
import { categories } from "../utilities/portfolioData";

const PortfolioPage = () => {
  return (
    <Flex
      maxW="7xl"
      h={""}
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Stack spacing={{ base: "6", md: "8", lg: "12" }}>
        <Flex
          justify="space-between"
          align={{ base: "start", md: "center" }}
          direction={{ base: "column", md: "row" }}
        >
          <Heading
            size="lg"
            mb={{ base: "3", md: "0" }}
            fontFamily={"open-sans"}
            fontWeight={"light"}
          >
            Portfolio
          </Heading>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, sm: 4 }}
          gap={{ base: "4", md: "6" }}
          boxSize={{ sm: "md", md: "lg", lg: "2xl", xl: "3xl" }}
        >
          {categories.map((category) => (
            <PortfolioCard key={category.name} category={category} />
          ))}
        </SimpleGrid>
      </Stack>
    </Flex>
  );
};

export default PortfolioPage;
