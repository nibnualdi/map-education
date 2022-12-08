import { axiosInstance } from "./axios/app";
import Cookies from "js-cookie";

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
    formContainer.remove();
  }).catch((err)=>{
    console.log(err);
  });
}

export function signup (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  axiosInstance.post("signup", {username, password}, ).then((res)=>{
    console.log("account is created");
    formContainer.remove();
  }).catch((err)=>{
    console.log(err);
  });
}
