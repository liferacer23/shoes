import React, { useState } from "react";
import BtnSlider from "./BtnSlider";
import styles from '../../styles/Slider.module.css'
export default function Slider({ shoes }) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== shoes.image.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === shoes.image.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = (index) => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(shoes.image.length);
    }
  };
  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className={styles.container_slider}>
      {shoes.image.map((res, index2) => {
        return (
          <div
            key={index2}
            className={
              slideIndex === index2 + 1 ? `${styles.slide} ${styles.active_anim}` : `${styles.slide}`
            }
          >
            <img alt="shoe" src={res} />
          </div>
             )
      })}
      <BtnSlider
        moveSlide={() => {
          nextSlide();
        }}
        direction={"next"}
      />
      <BtnSlider
        moveSlide={() => {
          prevSlide();
        }}
        direction={"prev"}
      />
      <div className={styles.container_dots}>
        {Array.from({ length: shoes.image.length }).map((item, index) => {
          return (
            <div key={index}
              onClick={() => {
                moveDot(index + 1);
              }}
              className={slideIndex === index + 1 ? `${styles.dot} ${styles.active}` : `${styles.dot}`}
            ></div>
          );
        })}
      </div>
      );
    </div>
  );
}
