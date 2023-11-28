import React from 'react'
import { About } from '../compnents/About'
import { Box } from '@chakra-ui/react'
import { Contact } from '../compnents/Contact'
import { Menu } from '../compnents/Menu'
import { Testimonials } from '../compnents/Testimonials'

export const Home = () => {
  return (
    <Box maxW={'1300px'} m={'auto'}>
      <About/>
      <Menu/>
      <Testimonials/>
      <Contact/>
    </Box>
  )
}
