import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { getAllProducts } from '../fetcher';

const Home = () => {
  const [products, setProducts] = useState({errorMessage: "", data: [] });

  useEffect (() => {
    const fetchData = async () => {
      const response = await getAllProducts();
      console.log("API Response: ", response);
      setProducts(response);
    };
    fetchData();
  }, []);
  return (

    <>
      <div>
        {products.errorMessage && <div>Error: {products.errorMessage}</div>}
        {products.data.map((p) => (
          <div key={p.id}>
            <Link to={`/products/${p.id}`}>{p.title}</Link>
          </div>
        ))}
      </div>
      
    </>
  )
};

export default Home;