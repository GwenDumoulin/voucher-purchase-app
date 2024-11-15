import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header() {
    return (
      <header className={styles.header}>
        <div className={styles['header-left']}>
          <h1>
            <Link to="/" className={styles['brand-link']}>
              YourVoucher
            </Link>
          </h1>
        </div>
        <div className={styles['header-right']}>
          <Link to="/admin" className={styles['admin-link']}>
            Admin
          </Link>
        </div>
      </header>
    );
  };
  
  export default Header;