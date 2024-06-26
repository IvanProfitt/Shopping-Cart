import NavBar from "./NavBar";
import Product from "./Product";

const Shop = () => {
    const productIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            <NavBar />
            <h1>SHOP</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {productIds.map(id => (
                    <Product key={id} id={id} />
                ))}
            </div>
        </>
    );
};

export default Shop;
