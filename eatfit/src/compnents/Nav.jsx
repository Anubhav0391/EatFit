import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Nav = () => {
  return (
    <Flex
    position={'sticky'}
    top={0}
    bgColor={'white'}
    zIndex={1}
    alignItems={'center'}
    fontWeight={500}
    justifyContent={'space-between'}
      p={5}
      boxShadow={
        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
      }
    >
      <Img
        src="https://djgt4pi2uqo7n.cloudfront.net/prod/assets/images/eatfit-logo-horizontal.svg"
        w={"10%"}
      />
      <Flex w={'40%'} justifyContent={'space-between'} alignItems={'center'}>
        <AnchorLink href="#about">
          <p>About Us</p>
        </AnchorLink>
        <AnchorLink href="#menu">
          <p>Menu</p>
        </AnchorLink>
        <AnchorLink href="#testimonials">
          <p>Testimonials</p>
        </AnchorLink>
        <AnchorLink href="#contact">
          <p>Contact Us</p>
        </AnchorLink>
      </Flex>
      <Text>Login</Text>
    </Flex>
  );
};
