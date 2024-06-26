import { Link } from "react-router-dom";
import styled from "styled-components";
import {  useContext } from "react";
import { CartContext } from "./CartLogic";





const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing:border-box;
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinks = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  margin: 0 5px;
  font-size: 18px;

  &:hover {
    background-color: #555;
    border-radius: 5px;
  }
`;

const CartLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <NavbarContainer>
      <NavLinksContainer>
        <NavLinks to="/">Home</NavLinks>
        <NavLinks to="/shop">Shop</NavLinks>
        <p>{cartItems.length}</p>
      </NavLinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
