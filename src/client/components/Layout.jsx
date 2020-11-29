import React from 'react';
import { Flex } from '@chakra-ui/react';

import Navbar from './Navbar';

export default function Layout(props) {
  return (
    <Flex h="100vh" direction="column">
      <Navbar />
      <Flex flex="1" px={3} py={10}>
        {props.children}
      </Flex>
    </Flex>
  );
}
