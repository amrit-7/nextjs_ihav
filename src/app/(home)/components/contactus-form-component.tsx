import React from "react";
import styles from "./contactus-form.module.css";
import contactus from "@/assets/contactus.png";
import ArrowForward from "@mui/icons-material/ArrowForward";
const ContactForm = () => {
  return (
    <div className={styles["contact-form-container"]}>
      <div className={styles["image-section"]}>
        <img src={contactus.src} alt="Collaboration" />
      </div>
      <div className={styles["text-section"]}>
        <h1 className="mb-3">Let&apos;s collaborate!</h1>
        <p className="mb-10">
          Tell us about your challenge and get help with your next moves in 24
          hours.
        </p>
        <div className={styles["form-section"]}>
          <div className={styles["form-group"]}>
            <div className="flex gap-5">
              <div>
                <label>Full Name</label>
                <input type="text" placeholder="Full Name" />
              </div>
              <div>
                <label>Phone</label>
                <input type="text" placeholder="Phone" />
              </div>
            </div>
          </div>
          <div className={styles["form-group"]}>
            <label>Email</label>
            <input type="email" placeholder="Email Address" />
          </div>
          <div className={styles["form-group"]}>
            <label>Message</label>
            <textarea placeholder="Message"></textarea>
          </div>
          <button className={styles["form-button"]} type="submit">
            Send Message <ArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
