
import { NavLink } from 'react-router-dom';
import styles from '../../src/assets/navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h3>Client Page</h3>
    <nav >
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
      </ul>
    </nav>
    </div>

  );
};

export default Navbar;

