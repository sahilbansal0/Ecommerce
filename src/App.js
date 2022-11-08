import { Routes, Route } from 'react-router-dom';
import './app.css';
import Home from './Components/home/Home';
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Cart from './Components/Cart'
import Product from './Components/Product'
import Products from './Components/Products';
import Signup from './Components/Signup';
import Orders from './Components/Orders';
import Payment from './Components/Payment';
import Electronics from './Components/products/Electronics';
import Men from './Components/products/Men'
import React from 'react';

import Women from './Components/products/Women'

import Jewelery from './Components/products/Jewelery';
import Showsingleproduct from './Components/products/Showsingleproduct';
function App() {

  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/product:id' element={<Products />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/order' element={<Orders />}></Route>
        <Route path='/payment' element={<Payment />}></Route>
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/jewelery' element={<Jewelery />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/electronics/:id' element={<Showsingleproduct />} />
        <Route path='/jewelery/:id' element={<Showsingleproduct />} />
        <Route path='/men/:id' element={<Showsingleproduct />} />
        <Route path='/women/:id' element={<Showsingleproduct />} />

      </Routes>
    </div>
  );
}

export default App;
