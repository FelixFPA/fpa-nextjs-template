import { Box, Flex, Button, Link, Icon, Spacer, Divider  } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box color = '#FFF'fontSize= '14px'fontFamily= 'Arial' lineHeight= '25px'>
      {/* Grey section */}
      <Flex   bgColor='#3B3B3B' p={4} >
        <Box>Haier</Box>
        <Spacer />
        <Box>Homeowners</Box>
        <Spacer />
        <Box>Installers</Box>
        <Spacer />
        <Box>Commercial</Box>
        <Spacer />
        <Box>General</Box>
        <Spacer />
        <Box><Button colorScheme="blue" variant='outline' bg = 'white'>Get a quote</Button></Box>
      
        
      
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
        <Divider />
        <Flex p = {8}>
        <Box>Privacy Terms & Conditions Disclaimer Site Map</Box>
        <Spacer></Spacer>
        <Box>© 2023 Haier Inc. All rights reserved.</Box>
        </Flex>
        
        <Divider />
        <Box p = {8}>** Legal copy to go here</Box>
      </Box>

    </Box>
  );
};

export default Footer;