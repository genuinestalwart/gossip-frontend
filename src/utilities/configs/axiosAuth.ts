import axios from "axios";

const axiosAuth = axios.create({
	baseURL: "http://localhost:5000",
});

export default axiosAuth;
