import React from "react";
import Image from "next/image";
import styles from "./card-component.module.css";

interface Props {
  icon: string;
  title: string;
  body: string;
}

export function CardComponent({ data }: Props) {
  const { icon, title, body } = data;
  return (
    <div className={styles.card}>
      <Image src={icon} width={72} height={72} alt="icon" />
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>{body}</div>
    </div>
  );
}
