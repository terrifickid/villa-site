import axios from "axios";
import { PUBLIC_API_SERVER } from "$env/static/public";
export async function load({ params }) {
  const apiUrl = PUBLIC_API_SERVER + "/api";
  try {
    const response = await axios.post(apiUrl, {
      query: "listings/" + params.id,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Couldnt find listing ID", error);
    return {
      results: [],
    };
  }
}
