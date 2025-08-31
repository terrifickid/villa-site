import axios from "axios";
  import { PUBLIC_API_SERVER } from "$env/static/public";
export async function load({ url }) {
  console.log("Searching...", url.search);
  const apiUrl = PUBLIC_API_SERVER + "/search";
  try {
    const response = await axios.post(apiUrl, {
      query: "listings" + url.search,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return {
      results: [],
    };
  }
}
//?country=Anguilla&minOccupancy=1&checkIn=2023-10-01&checkOut=2023-10-03
