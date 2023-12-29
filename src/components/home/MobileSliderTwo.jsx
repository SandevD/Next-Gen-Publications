import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const MobileSliderTwo = () => {
  const slides = [
    "src/assets/img/slider/mobile/ms1.jpg",
    "src/assets/img/slider/mobile/ms2.jpg",
    "src/assets/img/slider/mobile/ms3.jpg",
    "src/assets/img/slider/mobile/ms4.jpg",
    "src/assets/img/slider/mobile/ms5.jpg",
  ];
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      swipeable={false}
      emulateTouch={false}
      stopOnHover={true}
      verticalSwipe='naturalSwipe'
      className="mt-24"
    >
      {slides.map((item, index) => (
        <div key={index}>
          <img src={item} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
      ))}
    </Carousel>
  );
};

export default MobileSliderTwo;
