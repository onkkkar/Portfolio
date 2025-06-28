'use client';
import { useEffect } from 'react';
import styles from './styles.module.scss';

const Home = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return <div className={styles.main}>Portfolio</div>;
};

export default Home;
