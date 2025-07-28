import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { slide } from '../../anim.js';
import Magnetic from '../../../../common/Magnetic/page';

const Index = ({ data, isActive, setActiveItem }) => {
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

  const handleMouseEnter = () => {
    setActiveItem(data.title);
  };

  const handleMouseLeave = () => {
    // Reset to Home when not hovering over any item
    setActiveItem('Home');
  };

  return (
    <motion.div
      custom={data.index}
      className={styles.link}
      variants={slide}
      initial='initial'
      animate='enter'
      exit='exit'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isActive && <div className={styles.indicator}></div>}
      <Magnetic>
        <a href={data.href} onClick={handleClick}>
          {data.title}
        </a>
      </Magnetic>
    </motion.div>
  );
};

export default Index;
