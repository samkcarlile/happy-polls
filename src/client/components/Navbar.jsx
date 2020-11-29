import React from 'react';
import { Flex, Spacer, Heading } from '@chakra-ui/react';

import ProfileDropdown from './ProfileDropdown';

export default function Navbar() {
  return (
    <Flex h="70px" bgColor="blue.200" align="center" px={2} shadow="md">
      <Heading>😊 Happy Polls</Heading>
      <Spacer></Spacer>
      <ProfileDropdown />
    </Flex>
  );
}
