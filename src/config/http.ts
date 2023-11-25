import axios from "axios";

const http = axios.create({
  baseURL: "https://drai-production.up.railway.app/",
});

export default http;
