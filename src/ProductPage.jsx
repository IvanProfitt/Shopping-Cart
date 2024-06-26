import GetProduct from "./GetProduct"

function ProductPage(){
    const {productInfo, error, loading } = GetProduct();

    return(
        <p>Now looking at {productInfo.title} </p>
    )



}

export default ProductPage