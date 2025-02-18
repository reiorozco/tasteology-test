"use client";

import React, { CSSProperties } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function GalleryCarousel() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="h-64"
      style={
        {
          "--swiper-navigation-size": "24px",
          "--swiper-theme-color": "#fff",
        } as CSSProperties
      }
    >
      <SwiperSlide>
        <Image
          src="/images/left-image.png"
          alt="recipe image"
          fill
          className="object-contain"
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src="/images/right-top-image.png"
          alt="recipe image"
          fill
          className="object-contain"
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src="/images/right-bottom-image.png"
          alt="recipe image"
          fill
          className="object-contain"
        />
      </SwiperSlide>
    </Swiper>
  );
}
