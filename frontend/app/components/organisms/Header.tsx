// components/Header.js
import { Box, Flex, IconButton, Spacer, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="header" bg="#005AAB">
      <Flex w="100%" p={4} align="center">
        <IconButton
          aria-label="Menu"
          icon={<HamburgerIcon boxSize="24px" color="white" />}
          onClick={onToggle}
          variant="outline"
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          border="none"
          marginRight={2}
        />
        <Link href="/" title="Your Website">
          <Image src="/Logo.svg" alt="Logo" width={65} height={20} />
        </Link>
        <Spacer />
        <IconButton
          aria-label="Search"
          icon={<SearchIcon boxSize="24px" color="white" />}
          variant="outline"
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          border="none"
        />
      </Flex>
    </Box>
  );
};

export default Header;