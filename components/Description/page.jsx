import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './anim.js';
import Button from '../../common/RoundedButton/page';

const Description = () => {
  const phrase =
    'Designing thoughtful interfaces. Building standout digital experiences. Merging creativity and code to craft products users remember.';
  const description = useRef(null);
  const isInView = useInView(description);

  const handleAboutClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(' ').map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? 'open' : 'closed'}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? 'open' : 'closed'}>
          Crafting modern, user-first web experiences through a blend of design
          sense and technical depth. Passionate about clean UI, smooth
          performance, and standout solutions.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Button className={styles.button} onClick={handleAboutClick}>
            <p>About me</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Description;
