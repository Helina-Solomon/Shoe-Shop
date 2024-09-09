//import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import SignIn from './Pages/Signin';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import About from './Pages/About';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart';
import Header from './Components/Header';
import PrivateRoute from './Components/PrivateRoute';
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/products' element={<Products />}/>
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path='/about' element={<About />}/>
      <Route path='/sign-in' element={<SignIn />}/>
      <Route path='/sign-up' element={<SignUp />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route
          path='/profile'
          element={
            
              <Profile />
            
          }
        />
      
      
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
