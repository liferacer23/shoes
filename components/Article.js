import React from "react";
import styles from "../styles/Article.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Article() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
      <h1>Meet the LeBron James Innovation Center</h1>
      <p>October 04, 2021</p>
      </div>
      <div className={styles.article}>
      <p>
        With its cantilevered top floor, the LeBron James Innovation Center is
        an attention grabber; its boldness is a spectacle of Nike’s
        sport-research capabilities. On that floor, the Nike Sport Research Lab
        (NSRL) is reborn, housing the world’s largest motion-capture
        installation (400 cameras), 97 force plates, body-mapping equipment and
        so much more. In the words of Matthew Nurse, PhD, VP of the Nike Explore
        Team Sport Research Lab, “The NSRL is the epicenter of where we work
        with athletes of all abilities, all backgrounds, all skills and all
        sports.” Some 40 years after its establishment in Exeter, New Hampshire,
        the NSRL continues to set the tone for performance breakthroughs. Within
        the LeBron James Innovation Center, the NSRL positions Nike for future
        decades of game-changing products and experiences for all athletes.
        “Athletes can move here at full speed, full motion — they can just
        play,” says Dr Nurse.
      </p>
      <div className={styles.article_page}>
            <Link href="https://news.nike.com/news/inside-the-nike-sports-research-lab-lebron-james-innovation-center"><a target="_blank"><h3>Read More</h3></a></Link>
      </div>
      </div>
      <div>
          <Image src={"/article/inovate.png"} width={1100} height={800}/>
      </div>
    </div>
  );
}
