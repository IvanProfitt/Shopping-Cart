import styled from "styled-components";
import { Link } from "react-router-dom";


const NavLinks = styled(Link)`
  color: black;
  background-color: #56b5f0;
  border-radius:5px;
  text-decoration: none;
  padding: 10px 15px;
  margin: 0 5px;
  font-size: 18px;
  transition: 0.3s;
  


  &:hover {
    background-color: #0597f2;
    border-radius: 5px;
  }
`;


function ShopPageContent(){

    const ShopHeader = styled.h1`
    font-weight:800;
    margin-top:60px;
    `

    return(
        <>
        <ShopHeader>The Item Store</ShopHeader>
        <ShopHeader>Shop for Everything you Desire.</ShopHeader>
        <NavLinks to="/shop">Shop</NavLinks>
        </>
    )
}

export default ShopPageContent;