import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
// import Title from "./Title";
// import Subtitle from "./Subtitle";

import { useEffect, useState } from "react";
import axios from "axios";
import Wrapper from "./Wrapper";

export default function Slider() {
  const slides = [
    "src/assets/img/slider/ms1.jpg",
    "src/assets/img/slider/ms2.jpg",
    "src/assets/img/slider/ms3.jpg",
  ];

  return (
    <div className="lg:pt-[88px] pt-20 pb-12">
      <HeroSlider
        height={"91vh"}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 100,
          slidingDelay: 100,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        <Overlay>
          <Wrapper></Wrapper>
        </Overlay>

        {slides.map((item, index) => (
          <Slide
            key={index}
            // shouldRenderMask
            label="Giau Pass - Italy"
            background={{
              backgroundImageSrc: item,
            }}
          />
        ))}

        {/* <Slide
        shouldRenderMask
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: giauPass,
        }}
      />

      <Slide
        shouldRenderMask
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: bogliasco,
        }}
      />

      <Slide
        shouldRenderMask
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: countyClare,
        }}
      />

      <Slide
        shouldRenderMask
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: craterRock,
        }}
      /> */}

        <MenuNav />
      </HeroSlider>
    </div>
  );
}
