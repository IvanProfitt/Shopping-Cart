import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import NavBar from "./NavBar";
import Product from "./Product";

const throbberAnimation = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.8;
  }
`;

const Throbber = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #333;
  animation: ${throbberAnimation} 0.8s infinite ease-in-out;
`;

const ShopContainer = styled.div`
  padding: 100px 20px 20px; /* Add top padding to avoid overlap with fixed NavBar */
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Shop = () => {
  const productIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const promises = productIds.map(id =>
          fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
        );

        await Promise.all(promises); // Ensure all products are loaded before setting loading to false
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    loadProducts();
  }, [productIds]);

  return (
    <ShopContainer>
      <NavBar />
      <h1 style={{ textAlign: "center" }}>SHOP</h1>
      {loading ? (
        <div style={{ textAlign: "center", margin: "50px 0" }}>
          <Throbber />
        </div>
      ) : (
        <ProductGrid>
          {productIds.map(id => (
            <Product key={id} id={id} />
          ))}
        </ProductGrid>
      )}
    </ShopContainer>
  );
};

export default Shop;
