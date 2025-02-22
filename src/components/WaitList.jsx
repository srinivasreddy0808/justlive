import styles from "./WaitList.module.css";
import { Sparkles } from "lucide-react";

const WaitList = () => {
  return (
    <div className={styles.container}>
      {/* Background Images */}
      <div className={styles.desktopBackground}>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.mobileBackground}>
        <div className={styles.overlay}></div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.centerContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.heading}>Ready to Simplify Your Life?</h1>
            <p className={styles.subText}>
              Be the first to know when we launch! Join our waiting list and get
              exclusive updates and early access to our journey.
            </p>
          </div>

          {/* Button (no onClick action) */}
          <button className={styles.joinButton}>
            <Sparkles color="#000" />
            <span className={styles.buttonText}>Join the waiting list</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitList;
