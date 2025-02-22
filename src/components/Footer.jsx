import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src="./logo1.png" alt="JustLiv Logo" className={styles.logo} />
        </div>
        <p className={styles.instagramLink}>
          <FaInstagram className={styles.icon} />
          <span className={styles.linkText}>
            <a
              href="https://www.instagram.com/justlivatx?igsh=MWo3czd1MXh3cQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with us on Instagram ♡
            </a>
          </span>
        </p>
        <div className={styles.linksContainer}>
          <div className={styles.links}>
            <p>
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy policy
              </a>
            </p>
            <p>
              <a
                href="/accessibility-statement"
                target="_blank"
                rel="noopener noreferrer"
              >
                Accessibility Statement
              </a>
            </p>
          </div>
          <p className={styles.linkedinLink}>
            <a
              href="https://www.linkedin.com/company/justliv-app-for-busy-parents/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} color="white" />
            </a>
          </p>
          <p className={styles.copyright}>© 2024 by JustLiv</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
