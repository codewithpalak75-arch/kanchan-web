import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import VisionSection from '../components/VisionSection';
import WhyChooseUs from '../components/WhyChooseUs';
import BankTransfer from '../components/BankTransfer';
import PatientExperiences from '../components/PatientExperiences';
import ContactCTA from '../components/ContactCTA';
const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <VisionSection />
      <WhyChooseUs />
      <BankTransfer />
      <PatientExperiences />
      <ContactCTA />
    </>
  );
};

export default Home;