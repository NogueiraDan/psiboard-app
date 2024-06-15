import axios from "axios";
import { REACT_APP_BASE_URL } from "../../utils";


const api = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    Accept: 'application/json',
 }
});

export default api;
