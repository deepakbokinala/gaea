import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext' 

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Grid,
    Text,
    Flex,
    Image,
    Box,
    VStack
  } from '@chakra-ui/react'

const NavMenu = () => { 
    const { isMenuOpen, closeMenu } = useContext(ShopContext)

  return (
    <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody> 
                <VStack p="2rem">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Cart</Link>
                </VStack>
            </DrawerBody>
            <DrawerFooter textAlign="center">
                <Text w="100%">© Copyright House Of Gaea</Text>
            </DrawerFooter>
        </DrawerContent>

    </Drawer>
  )
}

export default NavMenu