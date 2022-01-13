import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NavBar.module.css";
const Nav = () => {
  return (
    <div>
      <nav className={styles.nav_bar}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.svg" width={100} height={65} alt="logo" />
          </Link>
        </div>

        <div className={styles.links}>
          <div></div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/store">
            <a>Store</a>
          </Link>
          <div className={styles.text}>
            <Link href="/">
              <h1>Sneaker Society</h1>
            </Link>
          </div>
          <Link href="/upcoming">
            <a>UpComing</a>
          </Link>
          <Link href="/aboutus">
            <a>About Us</a>
          </Link>
        </div>
        <div className={styles.cart}>
          <Link href="/cart">
            <Image src="/cart.svg" width={45} height={45} />
          </Link>
        </div>

        <div className={styles.hamburger}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
