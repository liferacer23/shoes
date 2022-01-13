import React from 'react'
import leftArrow from './icons/left.svg';
import rightArrow from './icons/right.svg';
import styles from '../../styles/Slider.module.css'
import Image from 'next/image';
export default function BtnSlider({direction,moveSlide}) {
    return (
       <span onClick={moveSlide} className={direction==='next'?`${styles.btn_slide} ${styles.next}`:`${styles.btn_slide} ${styles.prev}`}>
           <Image src={direction==='next'?rightArrow:leftArrow} />
       </span>
    )
}
