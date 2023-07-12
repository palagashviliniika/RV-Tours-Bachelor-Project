import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../../css/styles.css";
import Landing from "@/Components/Landing";

import { Pagination, Autoplay } from "swiper";

const LandingSlider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <Landing
                        img={"/images/landingpic.jpg"}
                        txt={"Georgia Awaits: Embrace the Freedom of the Open Road and Explore Georgia on Wheels!"}
                        btn={"Explore Now"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Landing
                        img={"/images/rvriver.jpg"}
                        txt={"Chart Your Own Course: Let the Wheels Take You on an Unforgettable Georgian Adventure!"}
                        btn={"Plan Your Trip"}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default LandingSlider;
