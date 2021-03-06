import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:8080",
});
this.api.headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
this.api.headers.append('Access-Control-Allow-Credentials', 'true');
export default api;