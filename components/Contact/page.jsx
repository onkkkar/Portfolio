import styles from './style.module.scss';
import Rounded from '../../common/RoundedButton/page';
import { useRef, useEffect } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic/page';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });

  // CHANGED: added raw transforms
  const rawX = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rawRotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const footerRef = useRef(null);
  const circleRef = useRef(null);

  // CHANGED: apply spring for smoother animation
  const x = useSpring(rawX, { stiffness: 50, damping: 15 });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const rotate = useSpring(rawRotate, { stiffness: 40, damping: 12 });

  // const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    if (!circleRef.current || !container.current) return;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: '0% 100%',
        end: '100% 100%',
        scrub: 0.5,
      },
    });
    tl.to(
      circleRef.current,
      {
        height: 0,
        ease: 'none',
      },
      0,
    );
  }, []);

  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      {/* SEemicircular tTransition */}
      <div ref={circleRef} className={styles.circleDiv}>
        <div className={styles.circle}></div>
      </div>

      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <h2>Let's work</h2>
          </span>
          <h2>together</h2>

          {/* button movement with smooth spring */}
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Rounded backgroundColor={'#334BD3'} className={styles.button}>
              <p>Get in touch</p>
            </Rounded>
          </motion.div>

          {/* arrow with smooth spring rotation */}
          <motion.svg
            style={{ rotate, scale: 2 }}
            width='9'
            height='9'
            viewBox='0 0 9 9'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z'
              fill='white'
            />
          </motion.svg>
        </div>

        <div className={styles.nav}>
          <Rounded>
            <a
              href='mailto:onkarpatel10@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              onkarpatel10@gmail.com
            </a>
          </Rounded>
          <Rounded>
            <a
              href='tel:+917587033401'
              target='_blank'
              rel='noopener noreferrer'
            >
              +91 7587033401
            </a>
          </Rounded>
        </div>

        <div className={styles.info}>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <Link
                  href='https://github.com/onkar-03'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Link>
              </Magnetic>
            </span>
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
                href='https://www.linkedin.com/in/onkarpatel03/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Linkedin
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
