import { Outlet } from 'react-router-dom';
import AdminNavbar from '../components/Admin.Navbar'

const AdminLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <main>
        <Outlet/>
      </main>
   
    </div>
  );
};

export default AdminLayout


