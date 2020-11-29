import React from 'react';
import { SimpleGrid, Flex } from '@chakra-ui/react';

import UserPollItem from './UserPollItem';

export default function UserPollList() {
  return (
    <SimpleGrid minChildWidth="400px" spacing={4}>
      <UserPollItem />
      <UserPollItem />
      <UserPollItem />
      <UserPollItem />
    </SimpleGrid>
  );
}
