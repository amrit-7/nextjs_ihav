import styles from "./hire-mockup-component.module.css";
import ArrowForward from "@mui/icons-material/ArrowForward";

export default function HireMockupComponent() {
  return (
    <div className={styles["hire-component"]}>
      <div className={styles["hire-content"]}>
        <p className={styles["hire-title"]}>
          Hire an Experienced React JS Development Company
        </p>
        <p className={styles["hire-subtitle"]}>
          Tell us about your challenge, and let&apos;s get the ball rolling.
        </p>
        <button className={styles["hire-button"]}>
          Talk to Our Expert <ArrowForward />
        </button>
      </div>
      <div>mockup/image</div>
    </div>
  );
}
