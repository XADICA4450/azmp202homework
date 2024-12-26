
import { Outlet, Link } from 'react-router-dom';
import styles from '../../src/assets/admin.module.scss'
const AdminNavbar = () => {
  return (
    <div className={styles.admin}>
      <h3>Admin Page</h3>
      <nav>
        <ul>
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
          <li><Link to="/admin/products">Products</Link></li>
          <li><Link to="/admin/products/add">AddProduct</Link></li>
          <li><Link to="/admin/users/add">AddUser</Link></li>
          <li><Link to="/admin/products/edit/:id">EditProduct</Link></li>
          <li><Link to="/admin/users/edit/:id">EditUser</Link></li>
        </ul>
      </nav>
      <main>
      </main>
    </div>
  );
};

export default AdminNavbar;
