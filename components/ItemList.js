import React from "react";
import styles from "../styles/Home.module.css";
import Slider from "../components/Slider/Slider";
import Header from "../components/Header";
export default function ItemList({ jordans }) {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        {jordans.map((data, index) => {
          return (
            <div key={index} className={styles.itemContainer}>
              <div className={styles.itemHeader}>
                <h3>{data.title}</h3>
                <a className={styles.expand} href={`/l/${data.id}`}>
                  Details
                </a>
              </div>
              <div className={styles.itemBody}>
              <p>{data.description}</p>
              <Slider shoes={data} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
