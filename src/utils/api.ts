import axios from "axios";

export const api = axios.create({
    baseURL: "https://ecoapisafari.azurewebsites.net/api"
})