import React from "react";
import { CardComponent } from "./card-component";
import first from "@/assets/one.png";
import second from "@/assets/two.png";
import third from "@/assets/three.png";
import fourth from "@/assets/four.png";
import styles from "./info-section-component.module.css";

export default function InfoSectionComponent() {
  const cardsData = [
    {
      icon: first.src,
      title: "Increase Development Efficiency",
      body: "Supercharge the web development speed and significantly reduce costs with React developers who seamlessly recycle and reuse components across various web applications.",
    },
    {
      icon: second.src,
      title: "Delight Your users",
      body: "Reduce webpage loading times and create super-fast, SEO-friendly web applications and beautiful, interactive user interfaces with React js development services.",
    },
    {
      icon: third.src,
      title: "Launch Product Faster to Market",
      body: "Swiftly bring your software product to market and easily scale it according to the users' needs, all thanks to the effortless React code reusability and the exceptional performance optimization it offers.",
    },
    {
      icon: fourth.src,
      title: "Powered by the Future Proof Technology",
      body: "Build your own Marketplace, Custom portal, CRM, or interactive Dashboard that will pass the test of time with an experienced React Development Company.",
    },
  ];

  return (
    <div>
      <div className={styles.infoSection}>
        <div className={styles.infoContent}>
          <p className={styles.infoTitle}>
            Use React.js Development Services to Build Performant and
            User-Centric Web Applications
          </p>
          <div className={styles.infoDescription}>
            <p>
              React.js is currently one of the most popular and in-demand
              JavaScript libraries in the UK, allowing you to create visually
              stunning and cost-effective dynamic user interfaces.
            </p>
            <p>
              This library offers many benefits to your business, such as
              reducing investment costs, shortening time to market, and
              providing your clients with an exceptional user experience.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.businessSection}>
        <p className={styles.businessTitle}>
          How React.js Can Help Your Business?
        </p>
        <div className={styles.cardContainer}>
          {cardsData.map((cardData, index) => {
            return <CardComponent key={index} data={cardData} />;
          })}
        </div>
      </div>
    </div>
  );
}
