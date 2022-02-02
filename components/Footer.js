import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.section}>
      <div className={styles.logo}>
        <Image src="footerlogo.svg" width={200} height={200} />
      </div>
      <div className={styles.item}>
        <ul>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">STORE</a>
          </li>
          <li>
            <a href="">UPCOMING</a>
          </li>
          <li>
            <a href="">ABOUTUS</a>
          </li>
        </ul>
      </div>
      <div className={styles.socials}>
        <Link href="/">
          <a className={styles.social}>
            <Image src="social-icons/linkdin.svg" width={30} height={30} />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.social}>
            <Image src="social-icons/insta.svg" width={30} height={30} />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.social}>
            <Image src="social-icons/messenger.svg" width={30} height={30} />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.social}>
            <Image src="social-icons/twitter.svg" width={30} height={30} />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.social}>
            <Image src="social-icons/facebook.svg" width={30} height={30} />
          </a>
        </Link>
      </div>
      </div>
      <div className={styles.footer_bottom}>
        <h4>&copy;2022 Ethiopia Addis Ababa, Inc All rights reserved</h4>
      </div>
    </footer>
  );
}
