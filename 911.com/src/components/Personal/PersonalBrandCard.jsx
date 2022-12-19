
import { Box, Image, Text, Link } from "@chakra-ui/react";
import React from "react";
// import { Box } from "@chakra-ui/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PersonalBrandsCard = ({ something }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
        <Box p="2" h="fitContent" bg="white">

            <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="300ms"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {something.map((e, i) => (

                    <Box
                        key={i}
                        h="60%"
                        p="1rem"
                        textAlign="center"
                        borderRadius="5px"
                        _hover={{
                            boxShadow:
                                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                        }}
                        cursor="pointer"
                    >
                        <Link href="http://localhost:3000/products" target="_blank" textDecoration="none" textColor="gray">
                            <Image w={"40%"} m="50%" src={e.img} />
                            <Text fontSize={"17px"}>{e.title}</Text>
                        </Link>
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
};

export default PersonalBrandsCard;