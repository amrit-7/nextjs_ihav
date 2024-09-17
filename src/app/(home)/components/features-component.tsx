import React from "react";
import styles from "./features-component.module.css";
import first from "@/assets/react1.png";
import second from "@/assets/two.png";
import third from "@/assets/three.png";
import fourth from "@/assets/four.png";
import { CardComponent } from "./card-component";
export default function FeaturesComponent() {
  const cardsData = [
    {
      icon: first.src,
      title: "Narrow-and-deep expertise",
      body: "Get the best of React, React Native, and Next.js - the most efficient technologies to build apps. Get support from top experts to use all the advantages.",
    },
    {
      icon: second.src,
      title: "Fair and Transparent Billing",
      body: "Pay only for work that meets the high standards of Frictionless Development, directing your investment solely towards value-driven outcomes.",
    },
    {
      icon: third.src,
      title: "Proven Coding Standards",
      body: "Our attention to coding perfection means superior design, consistent logic, and ultimate reliability in your software solutions. Confirmed by Client Retention Rate.",
    },
    {
      icon: fourth.src,
      title: "CTO-to-CTO Partnership",
      body: "Experience a level of collaboration only possible when two CTOs come together, ensuring that your technology goals are met with precision and expertise.",
    },
  ];
  return (
    <div className={styles["main-container"]}>
      <h1 className={styles["main-title"]}>
        Why Choose PublicPro as Your React JS Development Company?
      </h1>
      <div className={styles.cardContainer}>
        {cardsData.map((cardData, index) => {
          return <CardComponent key={index} data={cardData} />;
        })}
      </div>
    </div>
  );
}
