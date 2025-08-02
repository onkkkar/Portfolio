import styles from './style.module.scss';
import Magnetic from '../../../../common/Magnetic/page';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.header}>
        <p>Socials</p>
      </div>
      <div className={styles.socials}>
        <Magnetic>
          <Link
            href='https://x.com/wannabe_sde'
            target='_blank'
            rel='noopener noreferrer'
          >
            Twitter
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            href='https://github.com/onkkkar'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            href='https://www.linkedin.com/in/onkkkar'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </Link>
        </Magnetic>
      </div>
    </div>
  );
};

export default Footer;
