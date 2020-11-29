import React, { useState } from 'react';
import {
  Flex,
  Spacer,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
} from '@chakra-ui/react';
import { BsPlus, BsListNested } from 'react-icons/bs';

import { noop } from '../../utils';

const sortOrderValues = {
  newest: 'Most Recent',
  oldest: 'Less Recent',
  popular: 'Popular',
};

export default function Toolbar({
  onNewPoll = noop,
  onSortChange = noop,
  ...props
}) {
  const [sortOrder, setSortOrder] = useState('newest');

  const _onSortChange = value => {
    setSortOrder(value);
    onSortChange(value);
  };

  return (
    <Flex {...props}>
      <Button
        onClick={onNewPoll}
        colorScheme="green"
        iconSpacing={2}
        leftIcon={<Icon boxSize={5} as={BsPlus} />}
      >
        New
      </Button>
      <Spacer />
      <Menu>
        <MenuButton as={Button} w="150px" leftIcon={<Icon as={BsListNested} />}>
          {sortOrderValues[sortOrder]}
        </MenuButton>
        <MenuList>
          <MenuOptionGroup
            defaultValue="newest"
            title="Sort by"
            type="radio"
            value={sortOrder}
            onChange={_onSortChange}
          >
            {Object.entries(sortOrderValues).map(([value, text]) => (
              <MenuItemOption key={value} value={value}>
                {text}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
}
