import axios from "axios";
import { PUBLIC_API_SERVER } from "$env/static/public";

export async function load({ page }) {
  console.log("Loading...", PUBLIC_API_SERVER);
  const apiUrl = PUBLIC_API_SERVER + "/api";
  const queries = [
    "listings/cities?skip=0&limit=100",
    "listings/cities?skip=100&limit=100",
    "listings/cities?skip=200&limit=100",
  ];

  try {
    const responsePromises = queries.map((query) =>
      axios.post(apiUrl, { query })
    );
    const responses = await Promise.all(responsePromises);

    const combinedData = responses.map((response) => response.data.results);
    const allCities = combinedData.flat(); // Simplify using flat()
    const uniqueCountries = [...new Set(allCities.map((cityObj) => cityObj.country))]; // Use Set for unique values
    const sorted = uniqueCountries.sort();

    return { countries: sorted };
  } catch (error) {
    console.error("Load error:", error.message, error.response?.data);
    return { countries: [] }; // Always return countries array
  }
}