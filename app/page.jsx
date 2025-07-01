'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import PreLoader from '@/components/PreLoader/page.jsx';
import { AnimatePresence } from 'framer-motion';
import Project from '@/components/Project/page.jsx';
import Modal from '@/components/Modal/page.jsx';

const projects = [
  {
    title: 'C2 Montreal',
    src: 'c2montreal.png',
    color: '#000000',
  },
  {
    title: 'Office Studio',
    src: 'officestudio.png',
    color: '#8C8C8C',
  },
  {
    title: 'Locomotive',
    src: 'locomotive.png',
    color: '#EFE8D3',
  },
  {
    title: 'Silencio',
    src: 'silencio.png',
    color: '#706D63',
  },
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState({ active: false, index: 0 });

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
      {/* <AnimatePresence mode='wait'>
        {isLoading && <PreLoader />};
      </AnimatePresence> */}

      <div className={styles.body}>
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            setModal={setModal}
          />
        ))}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
};

export default Home;
