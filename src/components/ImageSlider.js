import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    // container div
    <div className="relative overflow-hidden mt-[5.5rem] md:mt-5 md:h-[100vh]">
      {/* //arrowcontainer div*/}
      <div className="absolute flex justify-between top-[25%] md:top-[50%] z-[2] text-white w-full md:px-10 p-4 text-[4rem]">
        <div
          style={{ left: 0 }}
          onClick={() => {
            handleArrow("l");
          }}
        >
          <FontAwesomeIcon
            className="cursor-pointer w-[3rem] md:w-[unset]"
            icon={faArrowCircleLeft}
          />
        </div>
        <div
          style={{ right: 0 }}
          onClick={() => {
            handleArrow("r");
          }}
        >
          <FontAwesomeIcon
            className="cursor-pointer w-[3rem] md:w-[unset]"
            icon={faArrowCircleRight}
          />
        </div>
      </div>

      {/* wrapper div*/}
      <div
        className="w-[300vw] h-[100%] flex ease-in duration-[1.5s]"
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((image, i) => {
          return (
            // image container div
            <div key={i} className="w-[100vw] h-[100%]">
              {/* image slider image */}
              <img src={image} alt="slider" className="w-[100%] object-cover" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
