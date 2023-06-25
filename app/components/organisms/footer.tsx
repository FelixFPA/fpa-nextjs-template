import { Box, Flex, Button, Link, Icon } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" w="100%" py={6} px={4}>
      {/* Grey section */}
      <Flex w="100%" bg="gray.700" py={4} justifyContent="flex-end">
        <Button
          variant="outline"
          colorScheme="blue"
        >
          Get a quote
        </Button>
      </Flex>

      {/* Black section */}
      <Box w="100%" bg="black" py={4}>
        <Flex justifyContent="center">
          <Link href="#">
            <Icon as={FaInstagram} color="white" />
          </Link>
          <Link href="#" ml={4}>
            <Icon as={FaFacebook} color="white" />
          </Link>
          <Link href="#" ml={4}>
            <Icon as={FaYoutube} color="white" />
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;