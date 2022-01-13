import React, { useState } from "react";
import BtnSlider from "../Featured/BtnSlider";
import styles from '../../styles/Featured.module.css';

export default function Featured() {
  
    const [slideIndex, setSlideIndex] = useState(1);
    const images=['/featured/featured1.png','/featured/featured2.png','/featured/featured3.png','/featured/featured4.png','/featured/featured5.png']
   
  const nextSlide = () => {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = (index) => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(images.length);
    }
  };
  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className={styles.container_slider}>
      {images.map((res, index2) => {
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
        {Array.from({ length: images.length }).map((item, index) => {
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