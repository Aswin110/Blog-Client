import axios from "axios";

const apiUri = import.meta.env.VITE_URL;

const instance = axios.create({
    baseURL: apiUri,
    
})

export default instance;