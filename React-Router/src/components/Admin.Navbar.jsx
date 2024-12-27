
import { Outlet, Link, NavLink } from 'react-router-dom';
import styles from '../../src/assets/admin.module.scss'
const AdminNavbar = () => {
  return (
    <div className={styles.admin}>
      <h3>Admin Page</h3>
      <nav>
        <ul>
          <li><NavLink to="/admin">Dashboard</NavLink></li>
          <li><NavLink to="/admin/users">Users</NavLink></li>
          <li><NavLink to="/admin/products">Products</NavLink></li>
          <li><NavLink to="/admin/products/add">AddProduct</NavLink></li>
          <li><NavLink to="/admin/users/add">AddUser</NavLink></li>
          <li><NavLink to="/admin/products/edit/:id">EditProduct</NavLink></li>
          <li><NavLink to="/admin/users/edit/:id">EditUser</NavLink></li>
          <li><NavLink to="/admin/favorites">Favorites</NavLink></li>
        </ul>
      </nav>
      <main>
      </main>
    </div>
  );
};

export default AdminNavbar;
