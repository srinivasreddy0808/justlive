import HeroSection from "./components/HeroSection";
import JustLiv from "./components/JustLiv";
import HowItWorks from "./components/HowItWorks";
import MissionSection from "./components/MissionSection";
import WaitList from "./components/WaitList";
import Footer from "./components/Footer";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.app}>
      <HeroSection />
      <JustLiv />
      <HowItWorks />
      <MissionSection />
      <WaitList />
      <Footer />
    </div>
  );
}

export default App;
