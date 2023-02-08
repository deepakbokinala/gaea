
import React, { useState, useEffect } from "react";
import { Text, Flex } from '@chakra-ui/react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
    {
    url: "https://iili.io/H1hX07t.jpg",
    caption: "Image 1",
    description: "This is a description for Image 1."
    },
    {
    url: "https://iili.io/H1XOmPf.jpg",
    caption: "Image 2",
    description: "This is a description for Image 2."
    },
    {
    url: "https://iili.io/H1wM7rN.jpg",
    caption: "Image 3",
    description: "This is a description for Image 3."
    }
    ];
    
    useEffect(() => {
    const intervalId = setInterval(() => {
    setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
    }, []);
    
    const currentImage = images[currentIndex];
    
    return (
    <Flex h="75vh" w="100vw" position="relative">
    {images.map((image, index) => (
    <img
    key={index}
    src={image.url}
    alt="slider image"
    style={{
    height: "100%",
    width: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: index === currentIndex ? 1 : 0,
    transition: "1s",
    animation: `fadeInOut 1s ease-in-out ${
        index === currentIndex ? "0s" : "4s"
      } forwards`
    }}
    />
    ))}
    <div
    style={{
    position: "absolute",
    bottom: "5vh",
    left: "5vh",
    color: "white",
    fontFamily: "sans-serif",
    
    fontSize: "2rem"
    }}
    >
    <Text fontWeight= "700">{currentImage.caption}</Text>
    <Text fontSize= "1rem">{currentImage.description}</Text>
    </div>
    </Flex>
    );
    };
    
    export default Carousel;