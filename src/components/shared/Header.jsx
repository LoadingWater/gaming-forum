import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";


// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = props => {

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="teal.300"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          PlayGo
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Header;
