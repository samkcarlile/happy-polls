import React from 'react';
import { Flex, Container, Heading, useDisclosure } from '@chakra-ui/react';

import Toolbar from './Toolbar';
import UserPollList from './user-poll-list/UserPollList';
import PollEditorModal from '../poll-editor/PollEditorModal';

export default function DashboardPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container maxW="lg">
        <Flex direction="column">
          <Heading as="h2">My Polls</Heading>
          <Toolbar
            py={8}
            onNewPoll={onOpen}
            onSortChange={sort => console.log(sort)}
          />
          <UserPollList />
        </Flex>
      </Container>
      <PollEditorModal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={form => console.dir(form)}
      />
    </>
  );
}
