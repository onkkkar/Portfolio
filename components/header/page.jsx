'use client';
import { useState } from 'react';
import styles from './styles.module.scss';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={styles.button}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}
        ></div>
      </div>
    </>
  );
};

export default Header;
