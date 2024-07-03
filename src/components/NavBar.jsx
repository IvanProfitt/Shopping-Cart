import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "./CartLogic";

const NavbarContainer = styled.nav`
  background-color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
`;

const NavLinksContainer = styled.div`
  display: flex;
  width:95%;
  align-items: center;
  justify-content:space-between;
`;

const NavLinks = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 10px 15px;
  margin: 0 5px;
  font-size: 18px;
  transition: 0.3s;


  &:hover {
    background-color: #555;
    border-radius: 5px;
  }
`;

const CartLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);


  return (
    <NavbarContainer>
      <NavLinksContainer>
        <div>
        <NavLinks to="/">Home</NavLinks>
        <NavLinks to="/shop">Shop</NavLinks>
        </div>
        <div style={{display:'flex'}}>
        <p>{totalQuantity}</p>
        <CartLink to="/cart">
          <Icon src="/shopping-cart.png" alt="Shopping Cart" />
        </CartLink>
        </div>
      </NavLinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
