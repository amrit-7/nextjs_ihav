"use client";
import styles from "./footer-component.module.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
const FooterComponent = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-section"]}>
        <h2 className={styles["footer-logo"]}>Business Logo</h2>
        <div className={styles["social-media"]}>
          <a href="#">
            <FacebookRoundedIcon />
          </a>
          <a href="#">
            <LinkedInIcon />
          </a>
          <a href="#">
            <XIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className={styles["footer-section"]}>
        <h3>Our Services</h3>
        <ul>
          <li>
            <a href="#">Plumbing</a>
          </li>
          <li>
            <a href="#">Drainage</a>
          </li>
          <li>
            <a href="#">Bathrooms</a>
          </li>
          <li>
            <a href="#">Commercial</a>
          </li>
        </ul>
      </div>
      <div className={styles["footer-section"]}>
        <h3>Useful Links</h3>
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Updates</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Rates</a>
          </li>
        </ul>
      </div>
      <div className={styles["footer-section"]}>
        <h3></h3>
        <ul>
          <li>
            <a href="#">Customer Services</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
          <li>
            <a href="#">Company Policies</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
      <div className={styles["footer-section"]}>
        <h3>Contact Info</h3>
        <p>1 Sail Street, London, SE11 6NQ</p>
        <p>
          <a href="mailto:enquiries@PlumbingPros.com">
            enquiries@PlumbingPros.com
          </a>
        </p>
        <p>
          <a href="tel:02045276474">020 4527 6474</a>
        </p>
      </div>
      <div className={styles["footer-bottom"]}>
        <p>&copy; Plumbing Pros. All Rights Reserved</p>
        <p>Website by IH Adventure And Creative</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
