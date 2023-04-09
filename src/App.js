import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import { Home, SingleProduct, Cart, Checkout, Error, About, Products, PrivateRoute } from "./pages"



function App() {
  return (
    <Router>
    <Navbar />
    <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<SingleProduct />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
