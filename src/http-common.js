import axios from "axios";

//http://127.0.0.1:3000/todos/

//http://localhost:8080/api

export default axios.create({
  baseURL: "http://127.0.0.1:3000",
  headers: {
    "Content-type": "application/json"
  }
});