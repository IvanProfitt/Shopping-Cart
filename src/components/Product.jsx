import styled from "styled-components";
import GetProduct from "./GetProduct";
import { Link } from "react-router-dom";

const ProductCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding:30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  height:100%;
  width:100%;
  display: block;
`;

const ProductInfo = styled.div`
  padding: 16px;
`;

const ProductTitle = styled.h3`
  text-decoration: none;
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
    <Link to={`/shop/${productInfo.id}`} style={{textDecoration:'none', color:'black'}}>
    <ProductCard>
    <ProductTitle>{productInfo.title}</ProductTitle>
        <ProductImage src={productInfo.image} alt={productInfo.title} />
        <ProductInfo>
          <ProductPrice>${productInfo.price}</ProductPrice>
        </ProductInfo>

    </ProductCard>
    </Link>
  );
};

export default Product;
