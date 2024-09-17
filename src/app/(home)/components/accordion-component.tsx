"use client";
import React, { useState } from "react";
import styles from "./accodion-component.module.css";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles["accordion"]}>
      <div className={styles["accordion-header"]} onClick={toggleAccordion}>
        <h3>{title}</h3>
        <div className="icon">{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && <div className={styles["accordion-content"]}>{content}</div>}
    </div>
  );
};

export default Accordion;
