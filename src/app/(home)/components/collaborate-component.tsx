import HireMockupComponent from "./hire-mockup-component";
import styles from "./collaborate-component.module.css";
import ContactForm from "./contactus-form-component";

export default function CollaborateComponent() {
  return (
    <div className={styles["main-container"]}>
      <div className="mb-20">
        <ContactForm />
      </div>
      <HireMockupComponent />
    </div>
  );
}
