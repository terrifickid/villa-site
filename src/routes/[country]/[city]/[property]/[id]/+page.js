import axios from "axios";
export async function load({ params }) {
  const apiUrl = "https://vapi-le6wug7tlq-vp.a.run.app/search";
  try {
    const response = await axios.post(apiUrl, {
      query: "listings/" + params.id,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return {
      results: [],
    };
  }
}
