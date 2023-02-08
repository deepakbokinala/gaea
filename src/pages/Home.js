import React, { useContext, useEffect  } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'
import {Box, Grid, Text, Image} from '@chakra-ui/react'
 
const Home = () => {

    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    console.log(products)
if (!products) return <div>Loading...</div>

return (
    <Box>
        <Grid templateColumns={{ sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}>
        {
            products.map(product => (
                <Link to={`/products/${product.handle}`} key={product.id}>
                    <Box _hover={{opacity: "80%"}} textAlign="left">
                    <Image src={product.images[0].src} />
                    <Text>
                        {product.title}
                        </Text>
                    <Text>
                        ${product.variants[0].price.amount}
                    </Text>
                    </Box>
                </Link>
            ))
        }
        </Grid>
    </Box>
  )
}

export default Home