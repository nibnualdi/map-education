import Cookies from "js-cookie";
import { login } from "../utils/auth";
import { baseUrl } from "../utils/baseUrl";

const Form = (authFunc, pageName) => {
  const formContainer = document.createElement("div");
  formContainer.setAttribute("id", "formContainer");
  formContainer.style.position = "absolute";
  formContainer.style.zIndex = "1000";
  formContainer.style.width = "100%";
  formContainer.style.height = "100%";
  formContainer.style.backgroundColor = "white";
  formContainer.style.backgroundColor = "100";
  document.body.appendChild(formContainer);

  const title = document.createElement("h1");
  title.innerText = pageName;

  const form = document.createElement("form");
  formContainer.appendChild(form);

  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("id", "username");
  form.appendChild(inputName);
  
  const inputPass = document.createElement("input");
  inputPass.setAttribute("type", "password");
  inputPass.setAttribute("id", "password");
  form.appendChild(inputPass);

  const submitButton = document.createElement("button");
  submitButton.innerText = "Login";
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("name", "submit");
  submitButton.onclick = (element) => {
    authFunc(element);
  }
  form.appendChild(submitButton);

  const linkBackHome = document.createElement("p");
  linkBackHome.innerText = "Back to Home";
  linkBackHome.onclick = () => {
    formContainer.style.display = "none";
  }
  formContainer.appendChild(linkBackHome);
}

export const Auth = () => {
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.gap = "10px";
  container.style.top = "20px";
  container.style.right = "40px";
  container.style.zIndex = "10";
  container.style.fontFamily = "'Poppins', sans-serif";
  document.body.appendChild(container);
  
  const innerContainer = document.createElement("div");
  innerContainer.style.padding = "6px";
  innerContainer.style.borderRadius = "6px";
  innerContainer.style.boxShadow = "10px 10px 17px -7px rgb(0 0 0 / 33%)";
  innerContainer.style.backgroundColor = "cornsilk";
  innerContainer.onmouseover = () => {
    innerContainer.style.cursor = "pointer";
  }

  // button auth
  const linkToLoginOrUserName = document.createElement("p");
  const someWords = document.createElement("p");
  const logout = document.createElement("p");
  
  linkToLoginOrUserName.setAttribute("id", "linkToLoginOrUserName");
  someWords.setAttribute("id", "someWords");
  
  linkToLoginOrUserName.style.margin = "0";
  someWords.style.color = "white";
  someWords.style.fontSize = "16px";
  someWords.style.textShadow = "3px 3px 5px rgb(0 0 0 / 63%)";

  setInterval(()=>{
    const isAuth = Cookies.get("username");

    if(isAuth) {
      console.log("from auth")
      linkToLoginOrUserName.innerText = isAuth[0];
      innerContainer.appendChild(linkToLoginOrUserName);
  
      someWords.innerText = `Hi ${isAuth}!`;
      container.appendChild(someWords);
  
      container.appendChild(innerContainer);
  
      innerContainer.onclick = () => {
        logout.innerText = "Logout";
        logout.style.display = "block";
        logout.style.position = "absolute";
        logout.style.right = "40px";
        logout.style.top = "70px";
        logout.style.margin = "0";
        logout.style.backgroundColor = "cornsilk";
        logout.style.borderRadius = "5px";
        logout.style.padding = "10px";
        logout.style.fontFamily = "'Poppins', sans-serif";
        document.body.appendChild(logout);
        
        logout.onmouseover = () => {
          logout.style.cursor = "pointer";
        }
  
        logout.onclick = () => {
          Cookies.remove("username");
          logout.style.display = "none";
        }
      }
      
      return
    }
    console.log("from outside auth")
    
    // if already logged
    linkToLoginOrUserName.innerText = "Login";
    innerContainer.onclick = () => {
      Form(login, "Login");
    };
    innerContainer.appendChild(linkToLoginOrUserName);
    
    someWords.innerText = "Don't have account yet?";
    container.appendChild(someWords);
  
    container.appendChild(innerContainer);
  }, 1000);

}