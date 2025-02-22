import styles from "./JustLiv.module.css";
import { Sparkles } from "lucide-react";

const JustLiv = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Why JustLiv?</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <Sparkles />
          <h3 className={styles.cardTitle}>Custom Calendar</h3>
          <p className={styles.description}>
            Our Custom Activities Calendar instantly creates a personalized
            activity schedule based on your preferences, budget, and location.
            No more endless searching or juggling calendars.
          </p>
          <img src="./laptop.png" alt="Calendar" className={styles.image} />
        </div>

        <div className={styles.card}>
          <Sparkles />
          <h3 className={styles.cardTitle}>Tailored to Your Interests</h3>
          <p className={styles.description}>
            Filters let you choose activities by age, category, price, and more.
            Social features help you sync schedules with friends and see what
            they’re attending.
          </p>
          <img src="./child.png" alt="Interests" className={styles.image} />
        </div>

        <div className={styles.card}>
          <Sparkles />
          <h3 className={styles.cardTitle}>Stress-Free Bulk Booking</h3>
          <p className={styles.description}>
            Book all your child’s activities in just a few clicks. Our platform
            handles the details so you don’t have to.
          </p>
          <img src="./mother1.png" alt="Booking" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default JustLiv;
