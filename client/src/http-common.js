import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://localhost:8050/api/`,
  headers: {
Authorization: 'Bearer {token}'  }
})

//import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8050/api",
  headers: {
   // "Content-type": "application/json"
   Authorization: 'Bearer {token}'
  }
});