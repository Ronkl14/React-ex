import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData({ data: response.data, isLoading: false, error: null });
      } catch (error) {
        setData({ data: null, isLoading: false, error: error.message });
      }
    };

    fetchData();
  }, [url]);

  return data;
}
