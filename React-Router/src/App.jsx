

import ClientLayout from './layouts/ClientLayout';
import AdminLayout from './layouts/AdminLayout';
import Home from './pages/client/Home';
import About from './pages/client/About';
import Contact from './pages/client/Contact';
import Blog from './pages/client/Blog';
import BlogDetail from './pages/client/BlogDetail';
import Login from './pages/client/Login';
import Register from './pages/client/Register';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Products from './pages/admin/Products';
import AddUser from './pages/admin/AddUser';
import EditUser from './pages/admin/EditUser';
import EditProduct from './pages/admin/EditProduct';
import AddProduct from './pages/admin/AddProduct';
import NotFound from './pages/client/NotFound';
import {  Routes, Route } from 'react-router';
import Favorites from './pages/admin/Favorites';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="users/add" element={<AddUser />} />
          <Route path="users/edit/:id" element={<EditUser />} />
          <Route path="products/edit/:id" element={<EditProduct />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default App;


