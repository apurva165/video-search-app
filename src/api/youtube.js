import axios from "axios";
const KEY = "AIzaSyAkRvczjo_g7q7h89jgK3MDNlaqp168hrA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    key: KEY
  }
});
