import ArticlesComponent from "./components/articles-component";
import BannerComponent from "./components/banner-component";
import BenefitsComponent from "./components/benifits-component";
import ClientTestimonialComponent from "./components/client-testimonial-component";
import CollaborateComponent from "./components/collaborate-component";
import FaqComponent from "./components/faq-component";
import FeaturesComponent from "./components/features-component";
import HireComponent from "./components/hire-component";
import InfoSectionComponent from "./components/info-section-component";
import PlumbingContainerComponent from "./components/plumbing-container-component";
import ProcessComponent from "./components/process-component";
import TechnologyComponent from "./components/technologies-component";
import FooterComponent from "./components/footer-component";
export default function HomePage() {
  return (
    <>
      <BannerComponent />
      <InfoSectionComponent />
      <HireComponent />
      <ClientTestimonialComponent />
      <PlumbingContainerComponent />
      <ProcessComponent />
      <FeaturesComponent />
      <TechnologyComponent />
      <BenefitsComponent />
      <FaqComponent />
      <ArticlesComponent />
      <CollaborateComponent />
      <FooterComponent />
    </>
  );
}
