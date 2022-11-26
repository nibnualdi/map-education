import { axiosInstance } from "./axios/app";
import Cookies from "js-cookie";
import { baseUrl } from "./baseUrl";

if(Cookies.get("username")) {
  console.log("LU UDAH LOGIN!!!");
}

export function login (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  const formContainer = document.getElementById("formContainer");
  
  axiosInstance.post("login", {username, password}, ).then((res)=>{
    Cookies.set("username", res.data[0].username);
    formContainer.style.display = "none";
    // window.location = baseUrl;
  }).catch((err)=>{
    console.log(err);
  });
}

export function signup (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  axiosInstance.post("signup", {username, password}, ).then((res)=>{
    window.location = "/signup";
  }).catch((err)=>{
    console.log(err);
  });
}
