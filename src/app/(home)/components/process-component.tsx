import React from "react";
import styles from "./process-component.module.css";
export default function ProcessComponent() {
  return (
    <div className={styles["main-container"]}>
      <h1 className={styles["main-heading"]}>
        Enjoy Clear And Proven React js Development Process
      </h1>
      {/* <div className={styles["step-button-container"]}>
        <div className={styles["step-item"]}>
          <div className={styles["step-header"]}>
            <p>Step 1</p>
          </div>
        </div>
        <div className={styles["step-item"]}>
          <div className={styles["step-header"]}>
            <p>Step 2</p>
          </div>
        </div>
        <div className={styles["step-item"]}>
          <div className={styles["step-header"]}>
            <p>Step 3</p>
          </div>
        </div>
        <div className={styles["step-item"]}>
          <div className={styles["step-header"]}>
            <p>Step 4</p>
          </div>
        </div>
      </div> */}
      <div className={styles["steps-container"]}>
        <div className={styles["step"]}>
          <div className={styles["step-header"]}>Step 1</div>
          <h3 className={styles["card-title"]}>
            Aligning Goals with Our Client Partner
          </h3>
          <p className={styles["card-subtitle"]}>
            This is where our partnership begins. In an introductory call with
            our Client Partner, we get to know your vision, verify your
            objectives, and determine if we&apos;re the right fit for your React
            js development project.
          </p>
        </div>
        <div className={styles["step"]}>
          <div className={styles["step-header"]}>Step 2</div>
          <h3 className={styles["card-title"]}>
            Strategic Call with Our Delivery Team
          </h3>
          <p className={styles["card-subtitle"]}>
            In this vital meeting, our delivery (CTO, CDO, BA) team assesses
            your project for technical feasibility, recommends a technology
            stack, and outlines the development timeline with a tailored React
            team structure.
          </p>
        </div>
        <div className={styles["step"]}>
          <div className={styles["step-header"]}>Step 3</div>
          <h3 className={styles["card-title"]}>Expert-Led App Development</h3>
          <p className={styles["card-subtitle"]}>
            This is where your vision comes to life. Our React developers start
            the development process. We&apos;re not only building MVPs but
            developing full-fledged React applications. You can expect regular
            updates and open communication as we move through the stages of
            development together.
          </p>
        </div>
        <div className={styles["step"]}>
          <div className={styles["step-header"]}>Step 4</div>
          <h3 className={styles["card-title"]}>
            Partnership with Regular Check-ins
          </h3>
          <p className={styles["card-subtitle"]}>
            Our dedication to your success extends beyond just delivering your
            project. React development team hold regular check-ins and
            health-check meetings to monitor the progress of our partnership,
            discuss any concerns, and strategize for the future.
          </p>
        </div>
      </div>
    </div>
  );
}
