import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide } from '../../anim.js';

const Index = ({ data }) => {
  return (
    <motion.div
      custom={data.index}
      className={styles.link}
      variants={slide}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <Link href={data.href}>{data.title}</Link>
    </motion.div>
  );
};

export default Index;
