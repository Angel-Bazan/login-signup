import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import logo from './Assets/logo.png';

const Home = () => {
  return (
    <div className={styles.container}>
    <div className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />

      <div className={styles.nav}>
        <Link className={styles.link} to="/login">Login</Link> 
        <Link className={styles.link} to="/signup">Sign Up</Link>
      </div>
    </div>
  </div>
  );
};

export default Home;
