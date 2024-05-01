import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api"; // Import API fetching function

// Custom hook to fetch data from an API
const useFetch = (url) => {
  // State variables to store data, loading status, and error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null); // Consider using a boolean for loading state (true/false)
  const [error, setError] = useState(null);

  // useEffect hook to fetch data on component mount or URL change
  useEffect(() => {
    // Reset state before each fetch
    setLoading("loading..."); // Consider using a boolean instead of a string
    setData(null);
    setError(null);

    // Fetch data from the API using the provided URL
    fetchDataFromApi(url)
      .then((res) => {
        // Update state with fetched data and set loading to false
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        // Update state with error message and set loading to false
        setLoading(false);
        setError("Something went wrong!"); // Consider providing a more user-friendly error message
      });
  }, [url]); // Dependency array: refetch on URL change

  // Return an object containing data, loading status, and error
  return { data, loading, error };
};

export default useFetch;
