import styles from "./plumbing-container-component.module.css";
import react from "../../../assets/react1.png";
import code from "../../../assets/code.png";
import referal from "../../../assets/referal.png";
import lead from "../../../assets/lead.png";
import Image from "next/image";
export default function PlumbingContainerComponent() {
  const cardData = [
    {
      icon: code,
      title: "FULL PRODUCT DEVELOPMENT",
      subtitle:
        "We provide complete React js development services, including pre-development phase: technical discovery and post-launch supports",
    },
    {
      icon: react,
      title: "MIGRATION TO REACT JS",
      subtitle:
        "As an experienced Reactjs development company we had your back if you want to migrate from any other framework, or any other platform, to React.js.",
    },
    {
      icon: referal,
      title: "TEAM AUGMENTATION",
      subtitle:
        "Hire full teams of React.js developers available on-demand to join the project in every phase and add top skills to the existing capabilities.",
    },
    {
      icon: lead,
      title: "REACT JS CONSULTANCY AND CODE AUDIT",
      subtitle:
        "Our React js development team is ready to conduct the code review and provide end-to-end consultation services.",
    },
  ];
  return (
    <div className={styles["main-container"]}>
      <div className={styles["heading-container"]}>
        <p className={styles.heading}>
          ReactJS Development Services by PlumbingPro
        </p>
      </div>
      <div className={styles["service-card-container"]}>
        {cardData.map((card, index) => {
          const { icon, title, subtitle } = card;
          return (
            <div key={index} className={styles.card}>
              <div className={styles["card-content"]}>
                <div className={styles.icons}>
                  <Image width={72} height={72} src={icon} alt="display-icon" />
                </div>
                <div className={styles["card-heading"]}>
                  <h4>{title}</h4>
                  <p>{subtitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
