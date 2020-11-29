import React, { useRef, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
} from '@chakra-ui/react';

import OptionsForm from './OptionsForm';
import useInputValue from '../../hooks/useInputValue';

export default function PollEditorModal({
  isOpen,
  onClose,
  onSubmit = () => {},
}) {
  const initialRef = useRef();

  const [title, setTitle, onTitleChange] = useInputValue('');
  const [options, setOptions] = useState([{ title: 'Red', id: 1 }]);

  const _onSubmit = () => {
    const form = { title, options: options.map(o => o.title) };
    onSubmit(form);
    setTitle('');
    setOptions([]);
    onClose();
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
      isCentered
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a new poll</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Poll Name</FormLabel>
            <Input
              value={title}
              onChange={onTitleChange}
              size="lg"
              ref={initialRef}
              placeholder="My awesome poll"
            />
          </FormControl>
          <FormLabel pt={5}>Options</FormLabel>
          <Box px={5}>
            <OptionsForm options={options} setOptions={setOptions} />
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button onClick={_onSubmit} colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
