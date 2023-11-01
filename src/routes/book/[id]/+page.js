import axios from "axios";
export async function load({ params }) {
  const apiUrl = "https://vapi-le6wug7tlq-vp.a.run.app/search";
  try {
    const response = await axios.post(apiUrl, {
      query: "reservations/quotes/" + params.id,
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
//pk_live_ifI6zGqmmINgBCUQmIKeZqIT
