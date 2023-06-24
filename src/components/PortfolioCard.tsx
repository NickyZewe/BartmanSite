import {
  AspectRatio,
  Box,
  BoxProps,
  Image,
  Link,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { Category } from "../utilities/portfolioData";

interface Props {
  category: Category;
  rootProps?: BoxProps;
}
const PortfolioCard = (props: Props) => {
  const { category, rootProps } = props;
  return (
    <Box
      position="relative"
      key={category.name}
      borderRadius="xl"
      overflow="hidden"
      {...rootProps}
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
        cursor: "pointer",
      }}
    >
      <Link href={category.url} isExternal>
        <AspectRatio ratio={1 / 1}>
          <Image
            objectFit={"scale-down"}
            src={category.imageUrl}
            alt={category.name}
            fallback={<Skeleton />}
          />
        </AspectRatio>
        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(to-b, transparent 60%, gray.900)"
          boxSize="full"
        />
        <Box position="absolute" bottom="6" width="full" textAlign="center">
          <Text color="white" fontSize="lg" fontWeight="semibold">
            {category.name}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};

export default PortfolioCard;
