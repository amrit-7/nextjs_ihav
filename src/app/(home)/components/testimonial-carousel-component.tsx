"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import TestimonialCardComponent from "./testimonial-card-component";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={60}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        grabCursor={true}
        style={{
          "--swiper-navigation-size": "15px",
        }}
        breakpoints={{
          600: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
      >
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TestimonialCardComponent />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TestimonialCardComponent />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TestimonialCardComponent />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TestimonialCardComponent />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TestimonialCardComponent />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TestimonialCardComponent />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
