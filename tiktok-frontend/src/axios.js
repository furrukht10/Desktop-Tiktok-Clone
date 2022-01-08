import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-clone-backend-ft.herokuapp.com/",
});

export default instance;
