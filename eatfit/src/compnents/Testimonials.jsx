import { Box,  Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Box id="testimonials" p={'35px'}>
      <Heading fontSize={70}>
        Our <span style={{ color: "#FC2E71" }}>Testimonials</span>
      </Heading>
      <Slider {...settings}>
        <Box p={5} mt={10} boxShadow={'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px'}>
          <Img borderRadius={'50%'} w={'80px'} src="https://www.masaischool.com/images/new-homepage/banner-student-image1.webp" mr={20}/>
          <Text fontWeight={400}>
            I would recommend eatfit for anyone trying to get the word out about
            their business. It has saved me so much time!
          </Text>
        </Box>
        <Box p={5} mt={10} boxShadow={'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px'}>
          <Img borderRadius={'50%'} w={'80px'} src="https://www.masaischool.com/images/new-homepage/banner-student-image1.webp" mr={20}/>
          <Text fontWeight={400}>
            I would recommend eatfit for anyone trying to get the word out about
            their business. It has saved me so much time!
          </Text>
        </Box>
        <Box p={5} mt={10} boxShadow={'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px'}>
          <Img borderRadius={'50%'} w={'80px'} src="https://www.masaischool.com/images/new-homepage/banner-student-image1.webp" mr={20}/>
          <Text fontWeight={400}>
            I would recommend eatfit for anyone trying to get the word out about
            their business. It has saved me so much time!
          </Text>
        </Box>
        <Box p={5} mt={10} boxShadow={'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px'}>
          <Img borderRadius={'50%'} w={'80px'} src="https://www.masaischool.com/images/new-homepage/banner-student-image1.webp" mr={20}/>
          <Text fontWeight={400}>
            I would recommend eatfit for anyone trying to get the word out about
            their business. It has saved me so much time!
          </Text>
        </Box>
        <Box p={5} mt={10} boxShadow={'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px'}>
          <Img borderRadius={'50%'} w={'80px'} src="https://www.masaischool.com/images/new-homepage/banner-student-image1.webp" mr={20}/>
          <Text fontWeight={400}>
            I would recommend eatfit for anyone trying to get the word out about
            their business. It has saved me so much time!
          </Text>
        </Box>
        <Box p={5} mt={10} boxShadow={'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px'}>
          <Img borderRadius={'50%'} w={'80px'} src="https://www.masaischool.com/images/new-homepage/banner-student-image1.webp" mr={20}/>
          <Text fontWeight={400}>
            I would recommend eatfit for anyone trying to get the word out about
            their business. It has saved me so much time!
          </Text>
        </Box>
        <Box p={5} mt={10}  boxShadow={'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px'}>
          <Img borderRadius={'50%'} w={'80px'} src="https://www.masaischool.com/images/new-homepage/banner-student-image1.webp" mr={20}/>
          <Text fontWeight={400}>
            I would recommend eatfit for anyone trying to get the word out about
            their business. It has saved me so much time!
          </Text>
        </Box>
      </Slider>
    </Box>
  );
};
