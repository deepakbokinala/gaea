import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Badge, Box, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { MdMenu, MdShoppingBag } from 'react-icons/md'
import { Link } from 'react-router-dom'


const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext)
  return (
    <Flex flexDir="row" justifyContent="space-between" alignItems="center" p="1rem" position="relative" backgroundColor="black">
        <Icon as={MdMenu} fill="white" w={30} h={30} 
        onClick={() => openMenu()}
        />
        <Link to="/"><Image src="https://iili.io/H1XwDOX.png" w={100} /></Link>
        <Box>
        <Icon as={MdShoppingBag} fill="white" cursor="pointer" w={30} h={30} 
        onClick={() => openCart()}
        />
        <Badge backgroundColor="White" borderRadius="100%">{checkout.lineItems?.length}</Badge>
        </Box>
    </Flex>  
    )
}

export default NavBar