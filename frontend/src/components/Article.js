import Cookies from "js-cookie";
import { axiosInstance } from "../utils/axios/app";
import { map } from "../utils/mapInstance";

export const Article = (e) => {
  map.on("click", `${e.properties.city}`, (eMap) => {
    map.flyTo({ center: [eMap.lngLat.lng, eMap.lngLat.lat], zoom: 8, speed: 0.3 });

    const features = map.querySourceFeatures(e.properties.city);

    // ELEMENT container
    const container = document.createElement("div");
    container.setAttribute("id", "containerFullDesc");

    container.style.position = "absolute";
    container.style.right = "0";
    container.style.top = "0";
    container.style.width = "100vw";
    container.style.height = "100vh";
    container.style.background = "rgba(14,33,39,0.8)";
    container.style.color = "white";
    container.style.boxSizing = "border-box";
    container.style.padding = "100px";
    container.style.fontFamily = "'Poppins', sans-serif";
    container.style.fontSize = "22px";
    container.style.overflow = "auto";
    container.style.cursor = "auto";

    document.body.appendChild(container);

    // get data from api
    axiosInstance
      .get("polygons")
      .then((res) => {

        res.data.forEach((element) => {
          if (element.name.toLowerCase() === features[0]?.properties.city.toLowerCase()) {
            axiosInstance.post("polygon/get/like", {userId: Cookies.get("id"), polygonId: element.id}).then((res)=>{
              
              // ELEMENT like button
              // has not liked yet
              const lightLikeElement = document.createElement("i");
              lightLikeElement.setAttribute("class", "fa fa-solid fa-thumbs-up");
              lightLikeElement.setAttribute("id", "lightLike");

              lightLikeElement.style.position = "absolute";
              lightLikeElement.style.right = "200px";
              lightLikeElement.style.top = "200px";
              lightLikeElement.style.zIndex = "100";
              lightLikeElement.style.color = "rgba(14,33,39,0.9)";
              lightLikeElement.style.transform = "scale(2)";
              lightLikeElement.style.cursor = "pointer";

              lightLikeElement.addEventListener("click", (e)=>{
                if (e.target.id === "lightLike") {
                  axiosInstance.post("polygon/like", {userId: Cookies.get("id"), polygonId: element.id}).then((res)=>{
                    console.log(res)
                  });
                  lightLikeElement.setAttribute("id", "like");
                  lightLikeElement.style.color = "white";
                  return
                }
                if (e.target.id === "like") {
                  axiosInstance.post("polygon/unlike", {userId: Cookies.get("id"), polygonId: element.id}).then((res)=>{
                    console.log(res)
                  });
                  lightLikeElement.setAttribute("id", "lightLike");
                  lightLikeElement.style.color = "rgba(14,33,39,0.1)";
                  return
                }
              });

              container.appendChild(lightLikeElement);

              // already has liked
              if (res.data.length) {
                const likeElement = document.createElement("i");
                likeElement.setAttribute("class", "fa fa-solid fa-thumbs-up");
                likeElement.setAttribute("id", "like");

                likeElement.style.position = "absolute";
                likeElement.style.right = "200px";
                likeElement.style.top = "200px";
                likeElement.style.zIndex = "100";
                likeElement.style.color = "white";
                likeElement.style.transform = "scale(2)";
                likeElement.style.cursor = "pointer";

                likeElement.addEventListener("click", (e)=>{
                  if (e.target.id === "lightLike") {
                    axiosInstance.post("polygon/like", {userId: Cookies.get("id"), polygonId: element.id}).then((res)=>{
                      console.log(res)
                    });
                    likeElement.setAttribute("id", "like");
                    likeElement.style.color = "white";
                    return
                  }
                  if (e.target.id === "like") {
                    axiosInstance.post("polygon/unlike", {userId: Cookies.get("id"), polygonId: element.id}).then((res)=>{
                      console.log(res)
                    });
                    likeElement.setAttribute("id", "lightLike");
                    likeElement.style.color = "rgba(14,33,39,0.1)";
                    return
                  }
                });

                container.appendChild(likeElement);
                return 
              }
            });

            // ELEMENT title
            const title = document.createElement("h1");
            title.setAttribute("id", "title");
            title.style.textTransform = "capitalize";
            title.style.fontFamily = "'Kaushan Script', cursive";
            title.style.fontSize = "150px";
            title.style.textShadow = "4px 4px 3px rgb(255 255 255 / 61%)";
            title.style.color = "brown";
            title.style.margin = "0";

            title.innerText = element.name;

            container.appendChild(title);

            // ELEMENT image
            if (element.image) {
              const image = document.createElement("img");
              image.setAttribute("id", "image");
              image.src = element.image;
              image.style.float = "right";
              image.style.marginTop = "40px";
              image.style.marginRight = "40px";
              image.style.minWidth = "500px";
              image.style.maxWidth = "500px";
              image.style.padding = "60px";
  
              container.appendChild(image);
            }

            // ELEMENT desc
            const desc = document.createElement("p");
            desc.setAttribute("id", "desc");
            desc.innerText = element.desc;

            container.appendChild(desc);

            // recomendation
            axiosInstance.post('recomendation', {userId: Number(Cookies.get("id"))}).then((resRecomend)=>{
              if(!resRecomend.data.length) return;
              
              const recomendOuterContainer = document.createElement("div");
              recomendOuterContainer.style.width = "100%";
              recomendOuterContainer.style.marginTop = "100px";
              container.appendChild(recomendOuterContainer);
              
              const sentenceForRecomend = document.createElement("h1");
              sentenceForRecomend.style.fontSize = "16px";
              sentenceForRecomend.style.color = "white";
              sentenceForRecomend.innerText = "Artikel yang mungkin kamu suka";
              recomendOuterContainer.appendChild(sentenceForRecomend);
              
              const recomendContainer = document.createElement("div");
              recomendContainer.style.display = "flex";
              recomendContainer.style.gap = "10px";
              recomendContainer.style.width = "100%";
              recomendOuterContainer.appendChild(recomendContainer);

              resRecomend.data.map((eId)=>{
                const recomendArticle = res.data.filter(x => x.id === eId+1);
                console.log(recomendArticle, "recomendArticle");
                console.log(resRecomend, "resRecomend");
                
                recomendArticle.map((e)=>{
                  const featuresRecomend = map.querySourceFeatures(e.name);
                  console.log(featuresRecomend, "featuresRecomend");
                  const coordinateRecomend = featuresRecomend[0].geometry.coordinates[0][0];
  
                  const recomend = document.createElement("div");
                  recomend.style.display = "flex";
                  recomend.style.alignItems = "center";
                  recomend.style.gap = "5px";
                  recomend.style.padding = "5px";
                  recomend.style.cursor = "pointer";
                  recomend.style.background = "rgba(0,0,0,0.2)";
                  recomend.style.borderRadius = "5px";
    
                  recomendContainer.appendChild(recomend);
                  
                  const image = document.createElement("img");
                  image.src = e.image;
                  image.style.width = "50px";
                  image.style.height = "50px";
                  image.style.objectFit = "cover";
                  
                  recomend.appendChild(image);
                  
                  const title = document.createElement("h1");
                  title.style.textTransform = "capitalize";
                  title.style.fontFamily = "'Poppins', sans-serif";
                  title.style.fontSize = "20px";
                  title.style.color = "white";
                  title.innerText = e.name;
                  
                  recomend.appendChild(title);
                  
                  recomend.addEventListener('click', ()=>{
                    map.flyTo({ center: coordinateRecomend, zoom: 8, speed: 0.3 });
                    const title = document.querySelector("#title");
                    const desc = document.querySelector("#desc");
                    const image = document.querySelector("#image");
                    title.innerHTML = e.name;
                    desc.innerHTML = e.desc;
                    image.src = e.image;
                    // recomend.remove();
                  });
  
                });
              });
              


            });
          }
        });
      })
      .catch((err) => {
        console.log(err, "err");
      });

    // ELEMENT close button container
    const closeContainer = document.createElement("i");
    closeContainer.setAttribute("class", "fa-solid fa-circle-xmark");
    closeContainer.setAttribute("id", "closeContainer");

    closeContainer.style.position = "absolute";
    closeContainer.style.right = "100px";
    closeContainer.style.top = "100px";
    closeContainer.style.zIndex = "100";
    closeContainer.style.color = "white";
    closeContainer.style.transform = "scale(2)";
    closeContainer.style.cursor = "pointer";

    document.body.appendChild(closeContainer);

    closeContainer.addEventListener("click", () => {
      map.flyTo({ center: [35.21279633240056, 39.11766792630007], zoom: 5, speed: 0.3 });
      container.remove();
      closeContainer.remove();
    });
  });
};
