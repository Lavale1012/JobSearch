import React, { useState, useEffect } from "react";
import axios from "axios";

const api_key = process.env.EXPO_PUBLIC_API_KEY;
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "x-rapidapi-key": api_key,
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      alert(
        "There was an error while fetching data, please try again:" + error
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const reFetchData = () => {
    setLoading(true);
    fetchData();
  };
  return { data, Loading, Error, reFetchData };
};
export default useFetch;
