'use client';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PreLoader from '../components/PreLoader/page.jsx';
import Projects from '../components/Projects/page.jsx';
import Description from '../components/Description/page.jsx';
import Contact from '@/components/Contact/page.jsx';
import Landing from '@/components/Landing/page.jsx';

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
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <section id='home'>
        <Landing />
      </section>
      <section id='about'>
        <Description />
      </section>
      <section id='work'>
        <Projects />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </main>
  );
};

export default Home;
