import { Box, Button, Heading, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";

export const Contact = () => {
  return (
    <Box
      my={20}
      id="contact"
      p={10}
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
    >
      <Heading fontSize={70}>
        Contact <span style={{ color: "#FC2E71" }}>Us</span>
      </Heading>
      <form>
        <FormControl isRequired my={5}>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter name" />
        </FormControl>
        <FormControl isRequired my={5}>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter email id" />
        </FormControl>
        <FormControl isRequired my={5}>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Enter your message" />
        </FormControl>
      </form>
      <Box display={"flex"} justifyContent={"flex-end"} w={"100%"}>
        <Button color={"white"} bg={"#FC2E71"}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};
