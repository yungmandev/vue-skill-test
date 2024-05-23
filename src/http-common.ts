import axios from "axios";

export default axios.create({
  baseURL: "https://65777ff8197926adf62e6d8e.mockapi.io",
  headers: {
    "Content-type": "application/json"
  }
});
