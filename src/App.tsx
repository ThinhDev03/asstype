import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/userLayout'
import HomePage from './pages/homepage'
import Detailpage from './pages/detailpage'
import DetailLayout from './components/layout/detailLayout'
import AdminLayout from './components/layout/adminLayout'
import Dashboard from './pages/dashboard'
import Adminpage from './pages/adminpage'
import Signup from './pages/signup'
import Signin from './pages/signin'

import ProductUpdate from './pages/product-update'
import AddProduct from './pages/product-add'



// 1. Khai báo router react-router-dom

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path='/' element={<UserLayout />}> {/* user layout */}
        <Route index element={<HomePage />} />
        <Route path='detail/:id' element={<Detailpage />} />
      </Route>
      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='product/:id' element={<ProductUpdate />} />
        <Route path='add' element={<AddProduct />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
