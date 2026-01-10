import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'
import { getAllProducts } from '../fetcher';
import {CartContext} from '../Contexts/cartContext';

const Home = () => {
  const [products, setProducts] = useState({errorMessage: "", data: [] });
  const navigate = useNavigate();
  const { addProduct } = useContext(CartContext);
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
      <ProductInfoArticle>
        {products.errorMessage && <div>Error: {products.errorMessage}</div>}
        {products.data.map((p) => (
          <>
            <ProductTitle>
                <Link to={`/products/${p.id}`}>{p.title}</Link>
            </ProductTitle>

            <figure>
                <ProductImageContainer>
                    <ProductImageContainerImage src={ `/assets/${p.image}`} alt={p.title}/>
                </ProductImageContainer>
            </figure>
            
          <aside>
              <ProductInfo>
                  <ProductInfoHeader>Dimensions</ProductInfoHeader>
                  <label>{p.specs.dimensions}</label>
              </ProductInfo>

            {p.specs.capacity &&
                <ProductInfo>
                    <ProductInfoHeader>Capacity</ProductInfoHeader>
                    <label>{p.specs.capacity}</label>
                </ProductInfo>
            }

            <ProductInfo>
                <ProductInfoHeader>Features</ProductInfoHeader>
                <ul>
                    {p.features?.map((f, i) => {
                        return <ProductInfoListItem key={`feature${i}`}>{f}</ProductInfoListItem>
                    })}
                </ul>
            </ProductInfo>
          </aside>

          <aside>
            <ProductInfoFinancePrice>
                &pound;{p.price}
            </ProductInfoFinancePrice>

            <ProductInfoStock>
                <ProductInfoStockLabel>Stock Level: {p.stock}</ProductInfoStockLabel>
                <ProductInfoStockLabel>FREE Delivery</ProductInfoStockLabel>
            </ProductInfoStock>

            <ProductInfoAction>
                <ProductInfoActionButton onClick={() => navigate(`/products/${p.id}`)}>
                    View Product
                </ProductInfoActionButton>
                <ProductInfoActionButton 
                  onClick={() =>
                    addProduct({
                      id: p.id,
                      title: p.title,
                      price: p.price,
                      image: p.image,
                      stock: p.stock
                    })
                  }
                > Add to Basket </ProductInfoActionButton>
            </ProductInfoAction>
          </aside>

          </>
        ))}

      </ProductInfoArticle>
      
    </>
  )
};

export default Home;

const ProductInfoArticle = styled.article`  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.25fr 1fr 0.25fr;
  column-gap: 20px;
`

const ProductTitle = styled.div `
  grid-column: 1 / span 3;
  color: darkslategray;
  font-weight: bold;
  font-size: 1.5em;
  padding-left: 10px;
`;

const ProductImageContainer = styled.div`
  padding: 10px;
  width: 60%;
`;

const ProductImageContainerImage = styled.img `
  width: 100%;
  height: 100%;
`;

const ProductInfo = styled.div `
  display: flex;
  flex-direction: column;
`;

const ProductInfoHeader = styled.h3`
  color: darkslategray;
  font-size: 1em;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 5px;
`;

const ProductInfoListItem = styled.div`
  padding-top: 5px;
`;

const ProductInfoFinancePrice = styled.div`
  color: darkslategray;
  font-size: 2em;
  font-weight: bold;
  padding-top: 10px;
`;

const ProductInfoStock = styled.div`
  padding-left: 10px;
  margin-top: 20px;
  padding-top: 10px;
  background-color: lightgrey;
  height: 20%;
  width: 30%;
  border-radius: 5px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

const ProductInfoStockLabel = styled.div`
  padding-bottom: 5px;
`;

const ProductInfoAction = styled.div `
    display: flex;
    flex-direction: column;
`;

const ProductInfoActionButton = styled.button `
    width: 160px;
    height: 30px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: lightgray;
    border: solid 1px slategrey;
    font-weight: bold;
`;