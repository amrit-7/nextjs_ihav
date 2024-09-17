import ArrowForward from "@mui/icons-material/ArrowForward";
import styles from "./article-cards-component.module.css";

export default function ArticleCardsComponent({ data }) {
  const { img, name, date, category, body } = data;
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-header"]}>
        <img src={img} alt={name} className={styles["card-image"]} />
      </div>
      <div className={styles["card-content"]}>
        <div className={styles["card-header-info"]}>
          <div className={styles["cardBodyLeftHeading"]}>{category}</div>
          <div className={styles["cardBodyRightHeading"]}>{date}</div>
        </div>
        <h2 className={styles["cardBodyLeftParagraph"]}>{name}</h2>
        <p className={styles["cardBodyParagraph"]}>{body}</p>
        <button className={styles["btn"]}>
          Read Case Study <ArrowForward />
        </button>
      </div>
    </div>
  );
}
