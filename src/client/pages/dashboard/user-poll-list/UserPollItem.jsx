import React from 'react';
import {
  Box,
  Flex,
  Progress,
  IconButton,
  Text,
  VStack,
  Icon,
  Spacer,
} from '@chakra-ui/react';
import { BsLink45Deg, BsPencil } from 'react-icons/bs';

export default function UserPollItem({
  prompt = "What's your favourite colour?",
  answers = [
    { title: 'Red', votes: 10 },
    { title: 'Blue', votes: 20 },
    { title: 'Green', votes: 50 },
  ],
}) {
  return (
    <Box bgColor="gray.100" height="200px" p={4} rounded={8} shadow="base">
      <Flex h="100%" direction="column">
        <Text as="b" fontSize="2xl" mb={2}>
          What's your favourite colour?
        </Text>
        <Flex flex="1">
          <VStack flex="1">
            {answers.map(({ title, votes }, index) => (
              <Flex key={index} w="100%" align="center">
                <Text w="60px">{title}</Text>
                <Progress flex="1" size="lg" value={votes} />
              </Flex>
            ))}
          </VStack>
        </Flex>
        <Spacer></Spacer>
        <Flex mb={-2} justify="flex-end">
          <IconButton
            aria-label="Edit poll"
            icon={<Icon boxSize={5} as={BsPencil} />}
          />
          <IconButton
            aria-label="Copy link"
            icon={<Icon boxSize={5} as={BsLink45Deg} />}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
