import styles from "./HeroSection.module.css";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      {/* Background Images */}
      <div className={styles.background}>
        <img
          src="./justLivHero.png"
          alt="Children playing"
          className={styles.desktopImage}
        />
        <img
          src="./justlivmobile.png"
          alt="Children playing"
          className={styles.mobileImage}
        />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>
            Your Child&apos; s Perfect Schedule{" "}
            <br className={styles.lineBreak} /> in Just a Few Clicks
          </h2>
          <p className={styles.subheading}>Less Planning, More Living.</p>
          <button className={styles.button}>
            <Sparkles color="#000" />
            <span className={styles.buttonText}>Join the waiting list</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
