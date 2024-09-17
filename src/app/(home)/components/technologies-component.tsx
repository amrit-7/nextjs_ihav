import Image from "next/image";
import react from "../../../assets/react1.png";
import tail from "../../../assets/tailwind.png";
import redux from "../../../assets/redux.png";
import query from "../../../assets/reactquery.png";
import storybook from "../../../assets/stoorybook.png";
import next from "../../../assets/nextjs.png";
import graphql from "../../../assets/graphql.png";
import gatsby from "../../../assets/gatsby.png";
import styles from "./technologies-component.module.css";
export default function TechnologyComponent() {
  const techList = [
    {
      icon: react.src,
      name: "React JS",
    },
    {
      icon: tail.src,
      name: "Tailwind",
    },
    {
      icon: redux.src,
      name: "Redux",
    },
    {
      icon: query.src,
      name: "React Query",
    },
    {
      icon: storybook.src,
      name: "Storybook",
    },
    {
      icon: graphql.src,
      name: "GraphQL",
    },
    {
      icon: next.src,
      name: "Next.js",
    },
    {
      icon: gatsby.src,
      name: "Gatsby.js",
    },
  ];
  const numberList = [
    { value: "200+", title: "Projects Done" },
    { value: "10+", title: "Years of Experience" },
    { value: "30+", title: "Team Members" },
    { value: "98%", title: "CLIENT RETENTION RATIO" },
  ];
  return (
    <div className={styles["main-container"]}>
      <h1 className={styles["main-heading"]}>
        Technologies We Use in React js Projects
      </h1>
      <div className={styles["technology-list"]}>
        {techList.map((tech, index) => {
          return (
            <div key={index} className={styles["technology-card"]}>
              <Image src={tech.icon} alt="logo" width={60} height={60} />
              <p className={styles["card-title"]}>{tech.name}</p>
            </div>
          );
        })}
      </div>
      <div className={styles["numbers-container"]}>
        <p className={styles["subtitle-heading"]}>PlumbingPro in Numbers</p>
        <div className={styles["numbers"]}>
          {numberList.map((number, index) => {
            return (
              <div key={index} className={styles["number-content"]}>
                <h1 className={styles["number-value"]}>{number.value}</h1>
                <p className={styles["number-title"]}>{number.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
