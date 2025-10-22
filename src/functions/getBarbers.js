import { useState, useEffect } from "react";

const useBarbers = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const getBarbers = async () => {
      try {
        const response = await fetch(
          `https://aymene-dev.com/api/employee/all-employee-for-website`,
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

    getBarbers();
  }, []);

  return days;
};

export default useBarbers;
