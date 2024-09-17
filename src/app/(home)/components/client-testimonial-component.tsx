"use client";
import React from "react";
import TestimonialCarouselComponent from "./testimonial-carousel-component";
import styles from "./client-testimonial.module.css";
import HireMockupComponent from "./hire-mockup-component";

export default function ClientTestimonialComponent() {
  return (
    <div className={styles["client-testimonial-container"]}>
      <p className={styles["client-testimonial-title"]}>
        Client&apos;s Testimonials
      </p>
      <div className={styles["testimonial-carousel"]}>
        <TestimonialCarouselComponent />
      </div>
      <HireMockupComponent />
    </div>
  );
}
