import { useState, useEffect } from "react";

const useProducts = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          `https://zebarbershop.fr/v2/api/product/products`,
          {
            method: "GET",
          }
        );
        const result = await response.json();
        setDays(result.data);
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };

    getProducts();
  }, []);

  return days;
};

export default useProducts;
