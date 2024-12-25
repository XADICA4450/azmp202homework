
import { Outlet } from 'react-router-dom';
import Navbar from '../companents/Navbar';


const ClientLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
   \
    </div>
  );
};

export default ClientLayout;

