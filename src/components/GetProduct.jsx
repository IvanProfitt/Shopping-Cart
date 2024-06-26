import { useState, useEffect } from "react";

const GetProduct = (id) => {
  const initialProduct = {
    price: "-1",
    id: "-1",
    title: "",
    description: "",
    image: "",
    rating: "-1",
    ratingCount: "-1",
  };

  const [productInfo, setProductInfo] = useState(initialProduct);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);



    fetch(`https://fakestoreapi.com/products/${id}`, { mode: 'cors' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
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
