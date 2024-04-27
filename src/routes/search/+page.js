import axios from "axios";
import { PUBLIC_API_SERVER, PUBLIC_ICAL_MODE } from "$env/static/public";
export async function load({ url }) {
  var searchString = url.search + "&limit=100";
  if (PUBLIC_ICAL_MODE === "true") searchString = searchString + "&tags=iCal";
  console.log("Searching...", searchString);
  const apiUrl = PUBLIC_API_SERVER + "/api";
  try {
    const response = await axios.post(apiUrl, {
      query: "listings/" + searchString,
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
