import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import GetProduct from './GetProduct';
import NavBar from './NavBar';
import { CartContext } from './CartLogic';

// Styled Components for ProductPage
const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row; 
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-right: 20px;

  @media (max-width: 767px) {
    margin-right: 0; 
    margin-bottom: 20px; 
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 400px; 
  height: auto;
  border-radius: 10px;
`;

const DetailsContainer = styled.div`
  flex: 1; 
`;

const ProductTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  color: #218838;
  margin-bottom: 15px;
`;

const ProductDescription = styled.p`
  line-height: 1.8;
  margin-bottom: 20px;
`;

const AddToCartButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #218838; 
  }
`;

const ProductPage = () => {
  const { id } = useParams();
  const { productInfo, error, loading } = GetProduct(id);
  const { addToCart } = useContext(CartContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ProductContainer>
      <NavBar/>
      <ProductWrapper>
        <ImageContainer>
          <ProductImage src={productInfo.image} alt={productInfo.title} />
        </ImageContainer>
        <DetailsContainer>
          <ProductTitle>{productInfo.title}</ProductTitle>
          <ProductPrice>Price: ${productInfo.price}</ProductPrice>
          <ProductDescription>{productInfo.description}</ProductDescription>
          <AddToCartButton onClick={() => addToCart(productInfo)}>
            Add to Cart
          </AddToCartButton>
        </DetailsContainer>
      </ProductWrapper>
    </ProductContainer>
  );
};

export default ProductPage;
