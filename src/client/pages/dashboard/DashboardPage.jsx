import React from 'react';
import { Flex, Container, Heading } from '@chakra-ui/react';

import Toolbar from './Toolbar';
import UserPollList from './user-poll-list/UserPollList';

export default function DashboardPage() {
  return (
    <Container maxW="lg">
      <Flex direction="column">
        <Heading as="h2">My Polls</Heading>
        <Toolbar py={8} />
        <UserPollList />
      </Flex>
    </Container>
  );
}
