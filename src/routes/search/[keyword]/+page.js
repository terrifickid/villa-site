import axios from "axios";
import { PUBLIC_ICAL_MODE, PUBLIC_API_SERVER } from "$env/static/public";

export async function load({ params }) {
    const apiUrl = PUBLIC_API_SERVER + "/keyword";
  try {
    const q = {
      query: params.keyword,
    };
    if (PUBLIC_ICAL_MODE === "true") q["fields.tags[in]"] = "iCal";
    const response = await axios.post(apiUrl, q);
    console.log(apiUrl, response);
    return { results: response.data, keyword: params.keyword };
  } catch (error) {
    console.error(error);
    return {
      results: [],
    };
  }
}
//?country=Anguilla&minOccupancy=1&checkIn=2023-10-01&checkOut=2023-10-03
