import { Box, Flex, HStack, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  return (
    <Flex
      id="about"
      justifyContent={"space-between"}
      my={20}
      backgroundImage={
        "url(https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT6612/primary/3_1.jpg)"
      }
    >
      <Box
        w={"52%"}
        p={10}
        maxH={450}
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      >
        <Text fontSize={20} fontWeight={500}>
          We are building
        </Text>
        <Heading fontSize={70}>TOMORROW'S</Heading>
        <Heading fontSize={70} color={"#FC2E71"}>
          FOOD BRANDS
        </Heading>
        <Heading fontSize={70}>TODAY</Heading>
        <Text>
          Our purpose is to make honest food that customers love. By incubating
          food brands and operating state of the art cloud kitchens, we want to
          democratize the access to good food in a sustainable manner.
        </Text>
      </Box>
      <Box w={"45%"} p={10} mt={300}>
        <Slider {...settings}>
          <HStack justifyContent={"space-between"}>
            <Img
              w={"20%"}
              src="https://curefoods.in/images/Our-Purpose-01.svg"
            />
            <Box>
              <Heading>OUR PURPOSE</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis perspiciatis atque laborum aut, minima enim accusantium
                numquam cumque voluptatibus velit maxime, ea perferendis iure
                similique iste et beatae assumenda ad! Saepe, blanditiis,
              </Text>
            </Box>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Img
              w={"20%"}
              src="https://curefoods.in/images/Our-Purpose-01.svg"
            />
            <Box>
              <Heading>OUR PURPOSE</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis perspiciatis atque laborum aut, minima enim accusantium
                numquam cumque voluptatibus velit maxime, ea perferendis iure
                similique iste et beatae assumenda ad! Saepe, blanditiis,
              </Text>
            </Box>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Img
              w={"20%"}
              src="https://curefoods.in/images/Our-Purpose-01.svg"
            />
            <Box>
              <Heading>OUR PURPOSE</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis perspiciatis atque laborum aut, minima enim accusantium
                numquam cumque voluptatibus velit maxime, ea perferendis iure
                similique iste et beatae assumenda ad! Saepe, blanditiis,
              </Text>
            </Box>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Img
              w={"20%"}
              src="https://curefoods.in/images/Our-Purpose-01.svg"
            />
            <Box>
              <Heading>OUR PURPOSE</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis perspiciatis atque laborum aut, minima enim accusantium
                numquam cumque voluptatibus velit maxime, ea perferendis iure
                similique iste et beatae assumenda ad! Saepe, blanditiis,
              </Text>
            </Box>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Img
              w={"20%"}
              src="https://curefoods.in/images/Our-Purpose-01.svg"
            />
            <Box>
              <Heading>OUR PURPOSE</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis perspiciatis atque laborum aut, minima enim accusantium
                numquam cumque voluptatibus velit maxime, ea perferendis iure
                similique iste et beatae assumenda ad! Saepe, blanditiis,
              </Text>
            </Box>
          </HStack>
        </Slider>
      </Box>
    </Flex>
  );
};
