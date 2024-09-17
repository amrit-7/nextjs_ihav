import styles from "./articles-component.module.css";
import ArticleCardsComponent from "./article-cards-component";
import article1 from "@/assets/article1.png";
import article2 from "@/assets/article2.png";
import article3 from "@/assets/article3.png";

export default function ArticlesComponent() {
  const articlesData = [
    {
      img: article1.src,
      name: "How React JS Cut the Development Cost?",
      date: "December 14, 2023",
      category: "React JS",
      body: "Discover the captivating ways React can cut development costs substantially, harnessing its game-changing features.",
    },
    {
      img: article2.src,
      name: "React vs Vue: Which One to Choose?",
      date: "December 14, 2023",
      category: "React JS",
      body: "Discover the captivating ways React can cut development costs substantially, harnessing its game-changing features.",
    },
    {
      img: article3.src,
      name: "Navigating Complex Projects With React Agency",
      date: "December 14, 2023",
      category: "React JS",
      body: "Discover the captivating ways React can cut development costs substantially, harnessing its game-changing features.",
    },
  ];

  return (
    <div className={styles["main-container"]}>
      <div className={styles["heading-wrapper"]}>
        <h1 className={styles["main-heading"]}>
          Check Latest Articles Written by Our Experts
        </h1>
      </div>
      <div className={styles["cards-wrapper"]}>
        <div className={styles["cards-container"]}>
          {articlesData.map((article, index) => (
            <ArticleCardsComponent key={index} data={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
