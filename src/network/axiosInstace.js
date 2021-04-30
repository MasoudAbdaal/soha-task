import axios from "axios";

export const defaultInstance = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/all",
});
