import styles from './style.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.header}>
        <p>Socials</p>
      </div>
      <div className={styles.socials}>
        <a>Twitter</a>
        <a>GitHub</a>
        <a>LinkedIn</a>
      </div>
    </div>
  );
};

export default Footer;
