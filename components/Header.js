import React from "react";
import styles from "../styles/Home.module.css";
import { BsSearch } from "react-icons/bs";
export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <span className={styles.allposts}></span>
        <span className={styles.search}>
          <BsSearch />
        </span>
      </header>
    </div>
  );
}
