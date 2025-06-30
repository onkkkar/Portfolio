'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import PreLoader from '@/components/PreLoader/page.jsx';
import { AnimatePresence } from 'framer-motion';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <PreLoader />};
      </AnimatePresence>
    </main>
  );
};

export default Home;
