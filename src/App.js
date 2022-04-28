import React, { useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css';
import { fetchProducts, fetchUser } from './api';
import { createCart } from './api';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import Register from './Components/Register';
import SingleProduct from './Components/SingleProduct';
import Women from './Components/categories/Women';
import Men from './Components/categories/Men';
import Kids from './Components/categories/Kids';
import Accessories from './Components/categories/Accessories';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Checkout from './Components/Checkout';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [checkoutProducts, setCheckoutProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [token, setToken] = useState([]);

  useEffect(() => {
    fetchUser().then((user) => {
      console.log(user, 'user');
      if (user) {
        setUserInfo(user);
      }
    });
    createCart();
    const lstoken = localStorage.getItem('token');
    setToken(lstoken);
    fetchProducts().then((product) => {
      setProducts(product);
    });
  }, []);
  return (
    <>
      <Navbar setUserInfo={setUserInfo} userInfo={userInfo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products products={products} token={token} />}
        />
        <Route
          path="/categories/women"
          element={<Women products={products} token={token} />}
        />
        <Route
          path="/categories/men"
          element={<Men products={products} token={token} />}
        />
        <Route
          path="/categories/kids"
          element={<Kids products={products} token={token} />}
        />
        <Route
          path="/categories/accessories"
          element={<Accessories products={products} />}
        />
        <Route path="products/:id" element={<SingleProduct token={token} />} />
        <Route path="/login" element={<Login setUserInfo={setUserInfo} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/cart"
          element={
            <Cart
              setCheckoutProducts={setCheckoutProducts}
              setTotal={setTotal}
              setCartProducts={setCartProducts}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              checkoutProducts={checkoutProducts}
              total={total}
              cartProducts={cartProducts}
            />
          }
        />
      </Routes>
      <NotificationContainer />
    </>
  );
};

export default App;
