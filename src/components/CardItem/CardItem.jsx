import React from "react";
import styles from "./CardItem.module.css";
import Image from "next/image";
import Link from "next/link";

export const CardItem = ({ cardData }) => {
  const { borderColor, svg, title, text } = cardData;

  return (
    <li style={{ borderColor: `${borderColor}` }} className={styles.card}>
      <div className={styles.container}>
        <div className={styles.img_container}>
          <Image src={svg} width={100} height={100} alt={title}></Image>
        </div>
        <div className={styles.text_block}>
          <h2 className={styles.title}>{title}</h2>
          <ul className={styles.text}>
            {text.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link className={styles.link} href="/">
        View more
      </Link>
    </li>
  );
};
