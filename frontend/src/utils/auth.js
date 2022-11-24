import { axiosInstance } from "./axios/app";
import Cookies from "js-cookie";

export function login (e) {
  e.preventDefault()

  axiosInstance.post("login", {username: 'ibnu', password: 'admin123'}).then((res)=>{
    console.log(res);
    Cookies.set("username", "hahaha");
  }).catch((err)=>{
    console.log(err);
  });
}
