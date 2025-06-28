import styles from './style.module.scss';
import Link from './Link/page.jsx';

const Nav = () => {
  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Work', href: '/work' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <div className={styles.menu}>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((item, index) => {
            return <Link data={{ ...item, index }} key={index} href='' />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Nav;
