import axios from "axios";
import { config } from "src/config";
const axiosInstance = axios.create({
  baseURL: config.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
// axios.interceptors.response.use(
//   (response) => response?.data,
//   (error) => {
//     return (
//       Promise.reject(error?.response && error?.response.data) ||
//       "Something went wrong"
//     );
//   }
// );

export default axiosInstance;
