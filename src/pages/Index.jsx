import React, { useState } from "react";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Textarea, useToast, VStack } from "@chakra-ui/react";
import { FaEdit, FaPlus, FaTrash, FaUserCircle } from "react-icons/fa";

const EventForm = ({ onSubmit, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || "");
  const [description, setDescription] = useState(initialData.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description });
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl mt={4} isRequired>
        <FormLabel>Description</FormLabel>
        <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </FormControl>
      <Button mt={4} colorScheme="blue" type="submit">
        {initialData.id ? "Update Event" : "Create Event"}
      </Button>
    </Box>
  );
};

const Index = () => {
  const toast = useToast();

  const handleEventSubmit = (eventData) => {
    // TODO: make an API request to create/update the event
    toast({
      title: "Event submitted.",
      description: "We've received your event.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleEventDelete = (eventId) => {
    // TODO: make an API request to delete the event
    toast({
      title: "Event deleted.",
      description: "The event has been successfully deleted.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleLogin = (credentials) => {
    // TODO: make an API request to authenticate the user
  };

  const handleLogout = () => {
    // TODO: Invalidate the user session
  };

  return (
    <VStack spacing={8} p={8}>
      <Heading>Event Manager</Heading>
      <Button leftIcon={<FaUserCircle />} colorScheme="green">
        Login
      </Button>
      <Button leftIcon={<FaPlus />} colorScheme="blue">
        Create Event
      </Button>
      <Stack direction="row" spacing={4} align="center">
        <Button leftIcon={<FaEdit />} colorScheme="yellow">
          Edit Event
        </Button>
        <Button leftIcon={<FaTrash />} colorScheme="red" onClick={() => handleEventDelete(1)}>
          Delete Event
        </Button>
        <Button colorScheme="gray" onClick={handleLogout}>
          Logout
        </Button>
      </Stack>
      {/* Event Form will be conditionally rendered based on user actions */}
      {/* <EventForm onSubmit={handleEventSubmit} /> */}
    </VStack>
  );
};

export default Index;
