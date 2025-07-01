'use client';
import React from 'react';
import styles from './style.module.scss';

const Project = ({ index, title, setModal }) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
};

export default Project;
