import { useState, useEffect } from "react";
import axios from "axios";

/* import { RAPID_API_KEY } from "@env";

const rapidApiKey = RAPID_API_KEY; */

const useFetch = (endpoint, query) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log("There was an error while fetching data: ", error);
      setIsLoading(false);
      setIsError(true);
      alert("There was an error, please try again later");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    fetchData();
  };

  return { data, isLoading, isError, reFetch };
};

export default useFetch;
