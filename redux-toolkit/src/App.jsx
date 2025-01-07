
import './App.css'
import Product from './pages/Products'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'
import Basket from './pages/Basket'
import MainLayout from './Layouts/MainLayouts'
import { Route, Routes } from 'react-router-dom'
import Wishlist from './pages/Wishlist'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Product />} />
       
          <Route path='/add-edit' element={<AddProduct />} />
          <Route path='/add-edit/:id' element={<EditProduct />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/basket' element={<Basket />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
