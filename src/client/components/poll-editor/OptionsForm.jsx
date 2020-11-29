import React, { useState, useCallback } from 'react';
import {
  Box,
  Input,
  VStack,
  Button,
  Icon,
  Flex,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { BsPlus, BsTrash } from 'react-icons/bs';
import { nanoid } from 'nanoid';

const OptionInput = ({
  setOptionAt,
  deleteOption,
  index,
  defaultValue,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue ?? '');

  const updateOption = useCallback(
    e => {
      setValue(e.target.value);
      setOptionAt(index, e.target.value);
    },
    [setOptionAt, index]
  );

  return (
    <Flex w="100%">
      <InputGroup>
        <Input
          {...props}
          value={value}
          onChange={updateOption}
          placeholder={`Option #${index + 1}`}
        />
        <InputRightElement>
          <IconButton
            onClick={deleteOption}
            variant="ghost"
            colorScheme="red"
            icon={<Icon as={BsTrash} />}
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default function OptionsForm({ options = [], setOptions }) {
  const setOptionAt = (index, value) => {
    const newOptions = [...options];
    newOptions[index].title = value;
    setOptions(newOptions);
  };

  const deleteOptionAt = index => () => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const onAddOption = () => {
    setOptions([...options, { title: '', id: nanoid() }]);
  };

  return (
    <Box>
      <VStack spacing={4}>
        {options.map(({ title, id }, index) => (
          <OptionInput
            key={id}
            defaultValue={title}
            index={index}
            setOptionAt={setOptionAt}
            deleteOption={deleteOptionAt(index)}
          />
        ))}
      </VStack>
      <Button
        mt={5}
        onClick={onAddOption}
        iconSpacing={2}
        leftIcon={<Icon boxSize={5} as={BsPlus} />}
      >
        Add Option
      </Button>
    </Box>
  );
}
