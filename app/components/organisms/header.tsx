
import { Box, Flex, Text, Spacer } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box>

      <Box as="header" w="100%" p={4} bgColor="#005AAB">
        <Text fontSize="xl" color="white">
          Haier
        </Text>
      </Box>
      <Box as="header" w="100%" p={4} bgColor="#FFFFFF">
        <Flex>
          <Spacer></Spacer>
          <Box>Single Room</Box>
          <Box>Multi Room</Box>
          <Box>Whole Home</Box>
          <Box>More</Box>
          <Spacer></Spacer>
        </Flex>
      </Box>
    </Box>

  );
};

export default Header;