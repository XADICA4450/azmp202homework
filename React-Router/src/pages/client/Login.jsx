import  { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../../assets/login.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    navigate('/');
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Giriş</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email">E-poçt:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Şifrə:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Daxil ol</button>
      </form>
      <p className={styles.registerLink}>
        Hesabınız yoxdur? <Link to="/register">Qeydiyyatdan keçin</Link>
      </p>
    </div>
  );
};

export default Login;


