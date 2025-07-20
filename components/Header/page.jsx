'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './navigation/page';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton/page';
import Magnetic from '@/common/Magnetic/page';

export default function Index() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate header from top AFTER preloader ends
    gsap.fromTo(
      header.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 3.4,
        duration: 2,
        ease: 'power4.out',
      },
    );

    // Scroll-triggered button animation
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: 'power1.out',
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: 'power1.out',
          });
          setIsActive(false);
        },
      },
    });
  }, []);

  const handleNavClick = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <div
        ref={header}
        className={styles.header}
        style={{ opacity: 0, transform: 'translateY(-100px)' }} // hide before GSAP runs
      >
        <Magnetic>
          <div className={styles.logo}>
            <p className={styles.copyright}>©</p>
            <div className={styles.name}>
              <p className={styles.codeBy}>Code by</p>
              <p className={styles.onkar}>Onkar</p>
              <p className={styles.patel}>Patel</p>
            </div>
          </div>
        </Magnetic>

        <div className={styles.nav}>
          <Magnetic>
            <div className={styles.el}>
              <a onClick={() => handleNavClick('work')}>Work</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a onClick={() => handleNavClick('about')}>About</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a onClick={() => handleNavClick('contact')}>Contact</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
        </div>
      </div>

      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ''
            }`}
          ></div>
        </Rounded>
      </div>

      <AnimatePresence mode='wait'>{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
