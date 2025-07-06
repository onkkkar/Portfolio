import styles from './style.module.scss';
import Rounded from '../../common/RoundedButton/page.jsx';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic/page.jsx';

const Contact = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });

  // CHANGED: added raw transforms
  const rawX = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rawRotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  // CHANGED: apply spring for smoother animation
  const x = useSpring(rawX, { stiffness: 50, damping: 15 });
  const rotate = useSpring(rawRotate, { stiffness: 40, damping: 12 });
  const y = useTransform(scrollYProgress, [0, 1], [-10, 0]);

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={container}
      className={styles.contact}
    >
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
            <p>onkarpatel10@gmail.com</p>
          </Rounded>
          <Rounded>
            <p>+91 7587033401</p>
          </Rounded>
        </div>

        <div className={styles.info}>
          <div></div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <p>Github</p>
              </Magnetic>
            </span>
            <Magnetic>
              <p>Twitter</p>
            </Magnetic>
            <Magnetic>
              <p>Linkedin</p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
