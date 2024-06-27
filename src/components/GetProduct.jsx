import { useState, useEffect, useContext } from "react";
import CartLogic from "./CartLogic";




const GetProduct = (id) => {
  useContext(CartLogic);


  const [productInfo, setProductInfo] = useState(CartLogic.initialProduct);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log(`Fetching product ${id}`);

    fetch(`https://fakestoreapi.com/products/${id}`, { mode: 'cors' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(`Fetched product ${id}:`, data);
        setProductInfo({
          price: data.price,
          title: data.title,
          id: data.id,
          description: data.description,
          image: data.image,
          rating: data.rating.rate,
          ratingCount: data.rating.count,
        });
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching product:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return { productInfo, error, loading };
};

export default GetProduct;
