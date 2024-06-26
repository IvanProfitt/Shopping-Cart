import React from "react";
import styled from "styled-components";
import GetProduct from "./GetProduct";
import { Link } from "react-router-dom";

const ProductDiv = styled.div`
  width: 200px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
`;

const Product = ({ id }) => {
    const { productInfo, error, loading } = GetProduct(id);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    
    return (
      <ProductDiv>
        {productInfo.id && ( 
          <Link to={`/shop/${productInfo.id}`}>
            <h3>{productInfo.title}</h3>
            <img src={productInfo.image} width={100}></img>
          </Link>
        )}
      </ProductDiv>
    );
  };
export default Product;
