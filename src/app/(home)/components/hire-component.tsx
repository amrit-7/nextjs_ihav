"use client";
import React from "react";
import image from "../../../assets/bgimage.jpg";
import ArrowForward from "@mui/icons-material/ArrowForward";
import styles from "./hire-component.module.css";
import { Button } from "@mui/material";

const HireComponent = () => {
  const handleClick = () => {};
  const boxStyles = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 84.5%), url(${image.src})`,
    backgroundBlendMode: "darken",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className={styles.container}>
      <div className={styles["inner-container"]}>
        <div className={styles.title}>
          Hire React js Development Company Involved In Successful Digital
          Transformations
        </div>
        <div className={styles["cards-wrapper"]}>
          <div className={styles["card-container"]}>
            <div style={boxStyles} className={styles.card}>
              <div className={styles["card-content"]}>
                <div className={styles["card-title"]}>
                  Front-end development for web app MVP with React for insurance
                  company
                </div>
                <Button
                  variant="contained"
                  onClick={handleClick}
                  className={styles["read-case-study-btn"]}
                >
                  Read Case study <ArrowForward />
                </Button>
              </div>
            </div>
          </div>
          <div className={styles["card-container"]}>
            <div style={boxStyles} className={styles.card}>
              <div className={styles["card-content"]}>
                <div className={styles["card-title"]}>
                  Front-end development for web app MVP with React for insurance
                  company
                </div>
                <Button
                  variant="contained"
                  onClick={handleClick}
                  className={styles["read-case-study-btn"]}
                >
                  Read Case study <ArrowForward />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireComponent;
