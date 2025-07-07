import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './style.module.scss';

const Landing = () => {
  const img = useRef(null);
  const imgContainer = useRef(null);
  const titles = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.2 });

    tl.from(imgContainer.current, {
      scale: 1.3,
      duration: 3.25,
      ease: 'power3.inOut',
    })
      .from(
        img.current,
        {
          scale: 2,
          duration: 3.2,
          ease: 'power4.inOut',
        },
        '-=3.1',
      )
      .fromTo(
        titles.current.filter(Boolean),
        { y: '300%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 3,
          ease: 'power4.inOut',
        },
        '-=2.7',
      );
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.hero__titles}>
        <div className={styles.hero__title}>
          <h1 ref={(el) => (titles.current[0] = el)}>Hi, I&apos;m Onkar</h1>
        </div>
        <div
          className={`${styles.hero__title} ${styles['hero__title--outline']}`}
        >
          <h1 ref={(el) => (titles.current[1] = el)}>Hi, I&apos;m Onkar</h1>
        </div>
        <div className={styles.hero__title}>
          <h1 ref={(el) => (titles.current[2] = el)}>Hi, I&apos;m Onkar</h1>
        </div>
      </div>
      <div ref={imgContainer} className={styles.hero__imageContainer}>
        <img
          ref={img}
          src='/images/heroimg.webp'
          alt='Abstract cubic background'
          className={styles.hero__image}
        />
      </div>
    </section>
  );
};

export default Landing;
