import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { slideUp } from './anim.js';

const PreLoader = () => {
  return (
    <>
      <motion.div
        variant={slideUp}
        initial='initial'
        enter='enter'
        className={styles.introduction}
      >
        is Loading
      </motion.div>
    </>
  );
};

export default PreLoader;
