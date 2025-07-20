'use client';
import Link from 'next/link';
import styles from './style.module.scss';

export default function Project({ index, title, manageModal, link, github }) {
  return (
    <div
      className={styles.project}
      onMouseEnter={(e) => manageModal(true, index, e.clientX, e.clientY)}
      onMouseLeave={(e) => manageModal(false, index, e.clientX, e.clientY)}
    >
      <div className={styles.projectTitle}>
        <Link href={link} target='_blank' rel='noopener noreferrer'>
          <h2>{title}</h2>
        </Link>
      </div>

      {/* GitHub link - disables preview on hover, re-enables on leave */}
      <div className={styles.projectMeta}>
        <Link
          href={github}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.githubLink}
          onMouseEnter={(e) => manageModal(false, index, e.clientX, e.clientY)}
          onMouseLeave={(e) => manageModal(true, index, e.clientX, e.clientY)}
        >
          GitHub ↗
        </Link>
      </div>
    </div>
  );
}
