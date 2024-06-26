import { Link } from "react-router-dom";


function NavBar() {
    return(
        <>
        <ul>
            <Link to="/cart">Cart</Link>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
        </ul>
        </>
    )


    
}

export default NavBar;