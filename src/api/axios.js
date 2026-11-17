
import axios from "axios";

const API = axios.create({
  baseURL: "https://music-beats-google-auth.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});


export default API;
