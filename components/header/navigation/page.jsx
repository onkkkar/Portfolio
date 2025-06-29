'use client';
import styles from './style.module.scss';
import Link from './Link/page.jsx';
import { motion } from 'framer-motion';
import { menuSlide } from '../anim.js';
import Footer from './Footer/page.jsx';
import Curve from './Curve/page.jsx';

const Nav = () => {
  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Work', href: '/work' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { title: 'GitHub', href: '#' },
    { title: 'Twitter', href: '#' },
    { title: 'LinkedIn', href: '#' },
  ];

  return (
    <motion.div
      variants={menuSlide}
      initial='initial'
      animate='enter'
      exit='exit'
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((item, index) => {
            return <Link data={{ ...item, index }} key={index} href='' />;
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
};

export default Nav;
