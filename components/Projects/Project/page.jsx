'use client';
import Link from 'next/link';
import styles from './style.module.scss';

export default function index({ index, title, manageModal, link, github }) {
  return (
    <Link
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
    >
      <div className={styles.projectTitle}>
        <h2>{title}</h2>
      </div>
      {/* GitHub link - disables preview on hover, re-enables on leave */}
      <div className={styles.projectMeta}>
        <Link
          href={github}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.githubLink}
          onMouseEnter={(e) => {
            // hide preview
            manageModal(false, index, e.clientX, e.clientY);
          }}
          onMouseLeave={(e) => {
            // show preview again
            manageModal(true, index, e.clientX, e.clientY);
          }}
        >
          GitHub ↗
        </Link>
      </div>
    </Link>
  );
}
