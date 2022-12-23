import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";

const SimpleSlider = () => {
    const settings = {
        //   dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,

    };
    return (
        <>
            <Box
                fontWeight="bold"
                color="black"
                textColor="black"
            >
                <Slider {...settings}>

                    <Image h={{ base: "200px", sm: '200px', md: '400px', lg: "400px" }} src='https://img.freepik.com/free-vector/college-students-concept-illustration_114360-10205.jpg?w=2000' alt="first" />
                    <Image h={{ base: "200px", sm: '200px', md: '400px', lg: "400px" }} src='https://www.bankrate.com/2014/05/26174958/Reasons-to-go-to-college.jpg?auto=webp&optimize=high&crop=16:9' alt="second" />
                    <Image h={{ base: "200px", sm: '200px', md: '400px', lg: "400px" }} src='https://res.cloudinary.com/hud9ala09/image/upload/v1660741034/gi3pyifbnl5pvlixmkm2.png' alt="third" />
                    <Image h={{ base: "200px", sm: '200px', md: '400px', lg: "400px" }} src='https://money-assets.money.com/mcp/2020/profile/182670.jpg' alt="fourth" />
                    <Image h={{ base: "200px", sm: '200px', md: '400px', lg: "400px" }} src='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-06/220621-dartmouth-college-mb-1151-cf16f7.jpg' alt="fifth" />
                    <Image h={{ base: "200px", sm: '200px', md: '400px', lg: "400px" }} src='https://www.inquirer.com/resizer/KwIU_l_ig60g7JgucpRsgA92ccU=/760x507/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/FOVUKTR55VHRPMRY6OW6LUON4E.jpg' alt="sixth" />

                </Slider>
            </Box>
        </>
    );
}

export default SimpleSlider;