import Cookies from "js-cookie";
import { login, signup } from "../utils/auth";

const Form = (authFunc, pageName) => {
  const formContainer = document.createElement("div");
  formContainer.setAttribute("id", "formContainer");
  formContainer.style.position = "absolute";
  formContainer.style.zIndex = "1000";
  formContainer.style.width = "100%";
  formContainer.style.height = "100%";
  formContainer.style.backgroundColor = "rgba(233, 233, 233, 0.8)";
  formContainer.style.backgroundColor = "100";
  formContainer.style.display = "flex";
  formContainer.style.justifyContent = "center";
  formContainer.style.alignItems = "center";
  formContainer.style.gap = "30px";
  document.body.appendChild(formContainer);
  
  const innerContainer = document.createElement("div");
  innerContainer.style.padding = "20px";
  innerContainer.style.backgroundColor = "transparent";
  formContainer.appendChild(innerContainer);
  
  const title = document.createElement("h1");
  title.innerText = pageName;
  title.style.textTransform = "capitalize";
  title.style.fontFamily = "'Kaushan Script', cursive";
  title.style.fontSize = "150px";
  title.style.textShadow = "4px 4px 3px rgb(255 255 255 / 61%)";
  title.style.color = "brown";
  title.style.margin = "0";
  innerContainer.appendChild(title);

  // ELEMENT back button container
  const backContainer = document.createElement("i");
  backContainer.setAttribute("class", "fa-solid fa-arrow-left");
  backContainer.setAttribute("id", "backContainer");

  backContainer.style.position = "absolute";
  backContainer.style.left = "10px";
  backContainer.style.top = "10px";
  backContainer.style.zIndex = "10000";
  backContainer.style.color = "black";

  formContainer.appendChild(backContainer);

  backContainer.onclick = () => {
    formContainer.style.display = "none";
  }

  const form = document.createElement("form");
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.justifyContent = "center";
  form.style.alignItems = "center";
  form.style.gap = "10px";
  form.style.backgroundColor = "rgba(14,33,39,0.1)";
  form.style.maxWidth = "400px";
  form.style.width = "100%";
  form.style.height = "250px";
  form.style.padding = "20px";
  form.style.borderRadius = "10px";
  form.style.boxShadow = "10px 10px 50px -29px rgb(255 255 255)";

  formContainer.appendChild(form);

  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("id", "username");
  inputName.setAttribute("placeholder", "username");
  inputName.style.borderWidth = "0px";
  inputName.style.fontSize = "20px";
  inputName.style.borderRadius = "7px";
  inputName.style.padding = "12px";
  inputName.style.boxShadow = "0px 0px 17px 0px rgb(42 42 42 / 26%)";

  form.appendChild(inputName);
  
  const inputPass = document.createElement("input");
  inputPass.setAttribute("type", "password");
  inputPass.setAttribute("id", "password");
  inputPass.setAttribute("placeholder", "password");
  inputPass.style.borderWidth = "0px";
  inputPass.style.fontSize = "20px";
  inputPass.style.borderRadius = "7px";
  inputPass.style.padding = "12px";
  inputPass.style.boxShadow = "0px 0px 17px 0px rgb(42 42 42 / 26%)";
  form.appendChild(inputPass);

  const submitButton = document.createElement("button");
  submitButton.innerText = pageName;
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("name", "submit");
  submitButton.style.boxShadow = "inset 0px 1px 0px 0px #ffffff";
  submitButton.style.background = "linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%)";
  submitButton.style.backgroundColor = "#f9f9f9";
  submitButton.style.borderRadius = "6px";
  submitButton.style.border = "1px solid #dcdcdc";
  submitButton.style.color = "#666666";
  submitButton.style.fontSize = "15px";
  submitButton.style.fontWeight = "bold";
  submitButton.style.padding = "6px 24px";
  submitButton.style.textDecoration = "none";
  submitButton.style.textShadow = "0px 1px 0px #ffffff";
  
  submitButton.onclick = (element) => {
    authFunc(element);
  }
  form.appendChild(submitButton);

  const orParagraph = document.createElement("p");
  orParagraph.innerText = "or";
  orParagraph.style.margin = "0";
  form.appendChild(orParagraph);
  
  const toOtherAuth = document.createElement("p");
  toOtherAuth.style.fontFamily = "sans-serif";
  toOtherAuth.style.fontWeight = "600";
  toOtherAuth.style.color = "darkorange";
  toOtherAuth.style.margin = "0";

  if(pageName === 'Login') {
    toOtherAuth.innerText = "Signup";
    toOtherAuth.onclick = () => {
      const containerFormAboutToDelete = document.getElementById("formContainer");
      containerFormAboutToDelete.remove();
      Form(signup, "Signup");
    };
  } else {
    toOtherAuth.innerText = "Login";
    toOtherAuth.onclick = () => {
      const containerFormAboutToDelete = document.getElementById("formContainer");
      containerFormAboutToDelete.remove();
      Form(login, "Login");
    };
  }
  form.appendChild(toOtherAuth);
}


// button profile
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
    
    // if already logged
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
    
    // if not logged yet
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