import { useState, useEffect } from "react";

const useTimeWork = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const getTimeWork = async () => {
      try {
        const response = await fetch(
          `https://aymene-dev.com/api/time/get-time`
        );
        const result = await response.json();
        setDays(result.data);
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };

    getTimeWork();
  }, []);

  return days;
};

export default useTimeWork;
