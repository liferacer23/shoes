import React from 'react'
import styles from "../../styles/Trending.module.css";
import Image from 'next/image';
export default function Trending() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Trending Now</h1>
            </div>
            <div className={styles.body}>
                <div className={styles.left}>
                <Image src="/trending/trending1.jpg" width={600} height={600}/>
                <button>Shop</button>
                </div>
                <div className={styles.right}>
                <Image src="/trending/trending2.png" width={500} height={600}/>
                <button>Shop</button>
                </div>

            </div>
            
        </div>
    )
}
