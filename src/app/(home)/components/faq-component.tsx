import Accordion from "./accordion-component";
import styles from "./faq-component.module.css";

export default function FaqComponent() {
  return (
    <div className={styles["main-container"]}>
      <h1 className={styles["main-heading"]}>React js Development FAQ</h1>
      <div className={styles["accordion-container"]}>
        <Accordion
          title="What is React.js?"
          content="React.js is a highly sought-after JavaScript library that enables the development of highly performant user interfaces. Originally released as open-source by Facebook in 2013, React.js quickly gained popularity among big names such as Netflix, Uber, Airbnb, and more."
        />
        <Accordion
          title="How much does it cost to build React.js web applications?"
          content="The cost of building a React.js web application can vary greatly depending on the complexity of the project, the experience level of the developers, and other factors."
        />
        <Accordion
          title="How long does it take to build web apps with React.js?"
          content="The development time for a React.js web application depends on the complexity and scope of the project, as well as the experience level of the development team."
        />
        <Accordion
          title="When to choose React development?"
          content="React development is a good choice when you need a fast, scalable, and user-friendly web application. It is especially beneficial for single-page applications (SPAs) and complex user interfaces."
        />
        <Accordion
          title="Which big companies are using React?"
          content="Many big companies are using React, including Facebook, Netflix, Airbnb, Uber, and more."
        />
        <Accordion
          title="Which company is best for React Development?"
          content="The best company for React development depends on your specific project requirements and budget. Some top React development companies include Toptal, Fiverr, and Upwork."
        />
      </div>
    </div>
  );
}
