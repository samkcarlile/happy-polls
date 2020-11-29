import React from 'react';
import {
  Flex,
  Text,
  Avatar,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Icon,
} from '@chakra-ui/react';
import { BsBoxArrowInLeft } from 'react-icons/bs';

export default function ProfileDropdown({
  avatarSrc = '',
  onLogOut = () => {},
}) {
  return (
    <Menu>
      <MenuButton as={Button} variant="ghost" colorScheme="blue">
        <Flex align="center">
          <Avatar size="sm" name="Sam Carlile" src={avatarSrc} />
          <Text ml={3} fontSize="xl">
            Sam Carlile
          </Text>
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={onLogOut} icon={<Icon as={BsBoxArrowInLeft} />}>
          Log Out
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
