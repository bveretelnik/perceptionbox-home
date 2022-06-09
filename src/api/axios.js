import axios from "axios";

export const setupAxios = () => {
  axios.defaults.baseURL = "https://rickandmortyapi.com/api/";
  axios.defaults.headers.common = {
    Authorization: localStorage.getItem("character"),
  };
};
