import { Link } from 'react-router-dom';
import styles from './footerLogo.module.css';

const footerLogo = () => {
  return (
    <Link
      to='/'
      className={styles.footerLogo}>
      foodies
    </Link>
  );
};

export default footerLogo;
