import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState({
    data: "",
    loading: true,
  });

  useEffect(() => {
    axios
      .get(url)
      .then((response) =>
        setData((prev) => ({
          ...prev,
          data: response.data,
          loading: false,
        }))
      )
      .catch((error) => console.error(error));
  }, [url]);

  return data;
};
