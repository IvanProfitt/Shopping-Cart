import React from "react";
import styled from "styled-components";
import GetProduct from "./GetProduct";
import { Link, useParams } from "react-router-dom";

const ProductDiv = styled.div`
    width: 200px;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
`;

const Product = ( id ) => {
    const { productInfo, error, loading } = GetProduct(id);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <ProductDiv>
            <h3>{productInfo.title}</h3>
            <img src={productInfo.image} alt={productInfo.title} style={{ width: "100%", height: "auto" }} />
            <p>Price: ${productInfo.price}</p>
            <Link to={`/shop/${id}`}>View Details</Link>
        </ProductDiv>
    );
};

export default Product;
