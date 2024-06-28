import NavBar from "./NavBar";
import CartLogic from "./CartLogic";

function Cart() {
    return (
        <>
        <CartLogic>
        <NavBar/>
        <h1>CART</h1>
        </CartLogic>
        </>
    )
}

export default Cart;