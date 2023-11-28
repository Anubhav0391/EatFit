import { Box, Button, Flex, Grid, Img, Text } from "@chakra-ui/react";
import React from "react";

export const Menu = () => {
  const data = [
    {
      img: "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT7212/primary/2_1.jpg",
      title: "Butter Chiken",
      price: 255,
    },
    {
      img: "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/HRX57/primary/1_1.jpg",
      title: "Chiken keema",
      price: 296,
    },
    {
      img: "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/ALH29/primary/2_1.jpg",
      title: "Kubos",
      price: 175,
    },
    {
      img: "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/HPS26/primary/3_1.jpg",
      title: "Palak Pappu",
      price: 175,
    },
    {
      img: "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT6856/primary/6_1.jpg",
      title: "Kadhai Paneer",
      price: 293,
    },
    {
      img: "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT6221/primary/4_1.jpg",
      title: "Masala Egg Curry",
      price: 175,
    },{
      img: "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT7212/primary/2_1.jpg",
      title: "Butter Chiken",
      price: 255,
    },
    {
      img: "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/HRX57/primary/1_1.jpg",
      title: "Chiken keema",
      price: 296,
    },
    {
      img: "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/ALH29/primary/2_1.jpg",
      title: "Kubos",
      price: 175,
    },
    {
      img: "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/HPS26/primary/3_1.jpg",
      title: "Palak Pappu",
      price: 175,
    },
    {
      img: "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT6856/primary/6_1.jpg",
      title: "Kadhai Paneer",
      price: 293,
    },
    {
      img: "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT6221/primary/4_1.jpg",
      title: "Masala Egg Curry",
      price: 175,
    },{
      img: "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT7212/primary/2_1.jpg",
      title: "Butter Chiken",
      price: 255,
    },
    {
      img: "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/HRX57/primary/1_1.jpg",
      title: "Chiken keema",
      price: 296,
    },
    {
      img: "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/ALH29/primary/2_1.jpg",
      title: "Kubos",
      price: 175,
    },
    {
      img: "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/HPS26/primary/3_1.jpg",
      title: "Palak Pappu",
      price: 175,
    },
    {
      img: "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT6856/primary/6_1.jpg",
      title: "Kadhai Paneer",
      price: 293,
    },
    {
      img: "https://curefoods-images.eatfit.in/tr:w-295,ar-1.33/image/singles/eat/meals/EAT6221/primary/4_1.jpg",
      title: "Masala Egg Curry",
      price: 175,
    }
  ];
  return <Grid templateColumns={'repeat(4,1fr)'} id="menu" gap={5}>
    {data?.map(el=><Box w={'fit-content'}>
      <Img src={el.img} borderRadius={5}/>
      <Text fontWeight={450}>{el.title}</Text>
      <Flex justifyContent={'space-between'}>
        <Text fontWeight={700}>₹ {el.price}</Text>
        <Button color={"white"} bg={"#FC2E71"}> ADD </Button>
      </Flex>
    </Box>)}
  </Grid>;
};
