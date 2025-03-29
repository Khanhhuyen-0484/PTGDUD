import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CartContext} from "./CartContext"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import BookTable from './components/BookTable';
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  const cartContextValue = {
    cartItems,
    addToCart
  };

  return (
    <>
    <CartContext.Provider value={cartContextValue}>
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booktable" element={<BookTable />} />
      </Routes>
      <Footer/>
    </Router>
    </CartContext.Provider>
    </>
  )
}

export default App
