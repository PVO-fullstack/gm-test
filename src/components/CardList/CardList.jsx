import React from "react";
import { CardItem } from "../CardItem/CardItem";
import styles from "./CardList.module.css";
import data from "../../data/cardData.json";

export const CardList = () => {
  return (
    <ul className={styles.container}>
      {data.map((item) => (
        <CardItem key={item} cardData={item} />
      ))}
    </ul>
  );
};
