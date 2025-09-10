import { useState, useEffect } from "react";

const useServices = () => {
  let [days, setDays] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await fetch(
          `https://aymene-dev.com/api/service/get-services`
        );
        const result = await response.json();
        setDays(result.data);
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };

    getServices();
  }, []);

  days = days.filter((item) => item.services != "");

  return days;
};

export default useServices;
