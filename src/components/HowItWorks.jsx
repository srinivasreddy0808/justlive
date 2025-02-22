import styles from "./HowItWorks.module.css";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";

const HowItWorks = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>How it works</h2>
      <div className={styles.content}>
        <div className={styles.step}>
          <div className={styles.iconContainer}>
            <FaSearch className={styles.icon} />
          </div>
          <div>
            <h3 className={styles.stepTitle}>Browse</h3>
            <p className={styles.stepDescription}>
              Discover activities from our partner booking providers.
            </p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.iconContainer}>
            <MdOutlineCalendarToday className={styles.icon} />{" "}
            {/* React Icons: Calendar */}
          </div>
          <div>
            <h3 className={styles.stepTitle}>Build</h3>
            <p className={styles.stepDescription}>
              Share your child’s interests, schedule, and preferences. Watch as
              JustLiv creates the perfect calendar filled with activities.
            </p>
          </div>
          <img
            src="./downArrow.png"
            alt="downarrow"
            className={styles.downArrow}
          />
        </div>
        <div className={styles.step}>
          <div className={styles.iconContainer}>
            <FaRegHeart className={styles.icon} />
          </div>
          <div>
            <h3 className={styles.stepTitle}>Book</h3>
            <p className={styles.stepDescription}>
              Finalize your selections with one click and enjoy peace of mind.
            </p>
          </div>
          <img
            src="./twistedArrow.png"
            alt="twisted arrow"
            className={styles.twistedArrow}
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
