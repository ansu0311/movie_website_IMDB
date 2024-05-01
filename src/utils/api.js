// Import the Axios library for making HTTP requests
import axios from "axios";

// Define the base URL of the API
const BASE_URL = "https://api.themoviedb.org/3";

// Retrieve TMDB API token from environment variables (assuming Vite)
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// Set up default headers with authorization using the TMDB token
const headers = {
  Authorization: `bearer ${TMDB_TOKEN}`, // Use template literal for cleaner string formatting
};

// Function to fetch data from the API
export const fetchDataFromApi = async (url, params) => {
  try {
    // Make a GET request to the API endpoint with base URL, URL path, headers, and params
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });

    // Return the fetched data
    return data;
  } catch (err) {
    // Log any errors during the request
    console.error("Error fetching data:", err);
    return err
  }
};
