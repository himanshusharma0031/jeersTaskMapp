import axios from "axios";

const API = axios.create({
   baseURL: "https://jeerstaskmapp.onrender.com/api",
 // baseURL: "http://localhost:5000",
});


export default API;