import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SliderTwo = () => {
  const slides = [
    "src/assets/img/slider/ms1.jpg",
    "src/assets/img/slider/ms2.jpg",
    "src/assets/img/slider/ms3.jpg",
    "src/assets/img/slider/ms4.jpg",
    "src/assets/img/slider/ms5.jpg",
  ];
  // const customPrevButton = ({ onClick }) => (
  //   <button onClick={onClick} style={{ color: "blue" }}>
  //     Previous
  //   </button>
  // );

  // const customNextButton = ({ onClick }) => (
  //   <button onClick={onClick} style={{ color: "blue" }}>
  //     Next
  //   </button>
  // );
  return (
    <Carousel
      // renderArrowPrev={customPrevButton}
      // renderArrowNext={customNextButton}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      emulateTouch={true}
      stopOnHover={false}
      className="mt-20"
    >
      {slides.map((item, index) => (
        <div key={index}>
          <img src={item} />
          {/* <p className="legend"></p> */}
        </div>
      ))}
    </Carousel>
  );
};

export default SliderTwo;
