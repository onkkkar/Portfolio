import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { slide } from '../../anim.js';

const Index = ({ data }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = data.href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <motion.div
      custom={data.index}
      className={styles.link}
      variants={slide}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <a href={data.href} onClick={handleClick}>
        {data.title}
      </a>
    </motion.div>
  );
};

export default Index;
