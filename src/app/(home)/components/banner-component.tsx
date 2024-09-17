"use client";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import react from "@/assets/react.png";
import ts from "@/assets/ts.png";
import gql from "@/assets/gql.png";
import next from "@/assets/next.png";
import BannerFormComponent from "./banner-form-compoent";
import styles from "./banner-component.module.css";
import { Button } from "@mui/material";

export default function BannerComponent() {
  const listItems = [
    "Dedicated ReactJS Developers",
    "-",
    "Cost Effective Solution",
    "Fixed Monthly Bucket of Hours",
  ];
  const imagesArr = [react, ts, gql, next];

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerText}>
          <div className={styles.servicesText}>
            SERVICES
            <span className={styles.reactDevelopment}>
              REACT JS DEVELOPMENT
            </span>
          </div>
          <h1 className={styles.bannerTitle}>
            Top React js <br /> Development Company
          </h1>
          <p className={styles.bannerDescription}>
            Expand your business with lightning-fast web apps, expertly crafted
            using React.js
          </p>
          <div className={styles.listItems}>
            {listItems.map((listItem, index) => (
              <div key={index} className={styles.listItem}>
                <CheckRoundedIcon className={styles.listItemIcon} />
                <span className={styles.listItemText}>{listItem}</span>
              </div>
            ))}
          </div>
          <div className={styles.buttons}>
            <Button variant="contained" endIcon={<ArrowForwardIcon />}>
              View Portfolio
            </Button>
            <Button variant="outlined" startIcon={<PhoneInTalkOutlinedIcon />}>
              Call us now
            </Button>
          </div>
          <div className={styles.images}>
            {imagesArr.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                height={48}
                width={48}
                alt={"img"}
                style={{ objectFit: "contain" }}
              />
            ))}
          </div>
        </div>
        <BannerFormComponent />
      </div>
    </div>
  );
}
