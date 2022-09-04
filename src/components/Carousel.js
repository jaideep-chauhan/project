import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./images.js";

export default function Carousel(props) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="main-carousel container-sec">
        <h1 className="heading Bar-bottom">Trending Today</h1>
        <motion.div className="carousel-1" ref={carousel}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {images.map((image) => {
              return (
                <motion.div className="item">
                  <img src={image} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
