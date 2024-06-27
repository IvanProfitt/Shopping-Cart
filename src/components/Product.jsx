import styled from "styled-components";
import GetProduct from "./GetProduct";
import { Link } from "react-router-dom";

const ProductCard = styled.div`
  background-color: #f2f2f2;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-bottom: 1px solid #ddd;
`;

const ProductInfo = styled.div`
  padding: 16px;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const Product = ({ id }) => {
  const { productInfo, error, loading } = GetProduct(id);

  if (loading) return null;
  if (error) return <p>Error: {error.message}</p>;

  return (
    {loading},
    <ProductCard>
      <Link to={`/shop/${productInfo.id}`}>
        <ProductImage src={productInfo.image} alt={productInfo.title} />
        <ProductInfo>
          <ProductTitle>{productInfo.title}</ProductTitle>
          <ProductPrice>${productInfo.price}</ProductPrice>
        </ProductInfo>
      </Link>
    </ProductCard>
  );
};

export default Product;
