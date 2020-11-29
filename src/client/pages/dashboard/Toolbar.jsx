import React from 'react';
import {
  Flex,
  Spacer,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { BsPlus, BsListNested } from 'react-icons/bs';

export default function Toolbar(props) {
  return (
    <Flex {...props}>
      <Button
        colorScheme="green"
        iconSpacing={2}
        leftIcon={<Icon boxSize={5} as={BsPlus} />}
      >
        New
      </Button>
      <Spacer />
      <Menu>
        <MenuButton as={Button} leftIcon={<Icon as={BsListNested} />}>
          Most Recent
        </MenuButton>
        <MenuList>
          <MenuItem>Most Recent</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
