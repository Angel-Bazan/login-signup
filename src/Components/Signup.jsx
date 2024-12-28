import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Signup.module.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signing up with', { email, password });
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Sign Up Page</h1>
      <form className={styles.form} onSubmit={handleSignup}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email:</label>
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password:</label>
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={styles.button} type="submit">Sign Up</button>
      </form>
      <div className={styles.backLink}>
        <Link to="/" className={styles.link}>Back to Home</Link>
      </div>
    </div>
  );
};

export default Signup;
