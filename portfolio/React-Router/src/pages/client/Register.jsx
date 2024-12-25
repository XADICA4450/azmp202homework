import  { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../../assets/Register.module.scss';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Şifrələr uyğun gəlmir!");
      return;
    }
    console.log('Registering with:', { name, email, password });
    navigate('/login');
  };

  return (
    <div className={styles.registerContainer}>
      <h1>Qeydiyyat</h1>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Ad:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Şifrəni təsdiqləyin:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Qeydiyyatdan keç</button>
      </form>
      <p className={styles.loginLink}>
        Artıq hesabınız var? <Link to="/login">Daxil olun</Link>
      </p>
    </div>
  );
};

export default Register;



