import axios from "axios";

const axiosAuth = axios.create({
	baseURL: "https://gs-gossip-backend.vercel.app",
});

export default axiosAuth;
