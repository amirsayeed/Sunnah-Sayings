import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://sunnah-sayings-server.vercel.app'
})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;