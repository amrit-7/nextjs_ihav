import React from "react";
import styles from "./testimonial-card-component.module.css";

export default function TestimonialCardComponent() {
  return (
    <div className={styles["testimonial-card"]}>
      <div className={styles["testimonial-card-header"]}>
        <p>A day ago</p>
      </div>
      <div className={styles["testimonial-card-content"]}>
        <div className={styles["testimonial-avatar"]}></div>
        <div className={styles["testimonial-info"]}>
          <p className={styles["testimonial-name"]}>Rob O&apos;Toole</p>
          <div className={styles["testimonial-rating"]}>
            {/* Use stars or any other rating component */}
            ★★☆☆☆
          </div>
        </div>
      </div>
      <p className={styles["testimonial-text"]}>
        Plumbingpro was excellent from a project management perspective, thanks
        to their budget flexibility and timely adherence to our deadlines.
      </p>
    </div>
  );
}
