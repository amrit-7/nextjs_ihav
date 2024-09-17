import React from "react";
import styles from "./benifits-compoenet.module.css";
import Image from "next/image";
import image from "../../../assets/benifits.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function BenefitsComponent() {
  return (
    <div className={styles["benefits-container"]}>
      <div className={styles["benefits-content"]}>
        <div className={styles["benefits-title-wrapper"]}>
          <h1>
            Use the benefits from a dedicated React.js and React Native company
          </h1>
          <ul>
            <li className={styles["benifit-text-container"]}>
              <CheckCircleIcon className={styles.checkmark} />
              <div>
                <strong>Tap Into Deep React Expertise</strong>
                <p>
                  Unlock quality and efficiency for your projects by using the
                  power of React.js and React Native. Your apps will be built on
                  the industry&apos;s most proven libraries.
                </p>
              </div>
            </li>
            <li className={styles["benifit-text-container"]}>
              <CheckCircleIcon className={styles.checkmark} />
              <div>
                <strong>Stay Ahead with Cutting-Edge Tech</strong>
                <p>
                  Stay at the cutting edge of digital innovation. Leverage the
                  latest tech trends, from headless CMSes to low-code and
                  no-code solutions.
                </p>
              </div>
            </li>
            <li className={styles["benifit-text-container"]}>
              <CheckCircleIcon className={styles.checkmark} />
              <div>
                <strong>Experience Seamless Project Execution</strong>
                <p>
                  A streamlined process ensures your projects are on time,
                  secure, and optimized for peak performance – eliminating
                  common hiccups and setbacks.
                </p>
              </div>
            </li>
            <li className={styles["benifit-text-container"]}>
              <CheckCircleIcon className={styles.checkmark} />
              <div>
                <strong>Enjoy Personalized Service and Expert Oversight</strong>
                <p>
                  Step into a partnership where you&apos;re the central focus.
                  Every project benefits from direct CTO expertise, ensuring
                  insights are aligned with your vision.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["benefits-image"]}>
        <img src={image.src} alt="Team Collaboration" />
      </div>
    </div>
  );
}
