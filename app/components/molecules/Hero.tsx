import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const Hero = ({ src, alt, title, description, buttonText }) => {
  return (
    <Box position="relative" width="100%" height={{ base: "75vh", md: "75vh", lg: "90vh" }}>
      <Box position="absolute" inset={0}>
        <Image
          src={src}
          alt={alt}
          width={2400}
          height={1200}
          className="hero-image"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
      <Flex
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        flexDirection="column"
        alignItems="center"
        color="#FFF"
        fontSize="14px"
        fontFamily="Arial"
        lineHeight="25px"
        textAlign="center"
      >
        <Text fontWeight="bold">{title}</Text>
        <Text>{description}</Text>
        <Button colorScheme="blue" variant="outline" bg="white" color="blue.500" mt={4}>
  {buttonText}
</Button>
      </Flex>
    </Box>
  );
};

export default Hero;