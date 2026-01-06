import React, {useState, useEffect} from 'react';
import './App.css';
import { getCategories} from './fetcher';

import ProductDetails from './components/productDetails';
import Basket from './components/basket';
import Checkout from './components/Checkout';
import Category from './components/Category';
import Layout from './components/Layout';
import Home from './components/Home';
import OrderConfirmation from './components/OrderConfirmation';
import SearchResults from './components/SearchResults';


import {BrowserRouter, Routes, Route,} from "react-router-dom";

function App() {
  const [categories, setCategories] = useState({errorMessage: '', data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    };
    fetchData();

  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Layout categories={categories} />} >
            <Route index element= {<Home />} />
            <Route path= "Basket" element= {<Basket />} />
            <Route path= "Checkout" element= { <Checkout />} />
            <Route path= "OrderConfirmation" element= { <OrderConfirmation />} />
            <Route path= "SearchResult" element= { <SearchResults />} />
            <Route path= "products/:productId" element= {<ProductDetails />} />
            <Route path= "categories/:categoryId" element= {<Category />} />
          </Route>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
