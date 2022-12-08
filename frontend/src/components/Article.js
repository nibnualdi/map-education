import { axiosInstance } from "../utils/axios/app";
import { map } from "../utils/mapInstance";

export const Article = (e, i) => {
  map.on("click", `${e.properties.city + i}`, (eMap) => {
    map.flyTo({ center: [eMap.lngLat.lng, eMap.lngLat.lat], zoom: 8, speed: 0.3 });

    const features = map.querySourceFeatures(e.properties.city + i);
    // console.log(features, "features");
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

    document.body.appendChild(container);

    // get data from api
    axiosInstance
      .get("polygons")
      .then((res) => {
        // console.log(res.data, "res");

        res.data.forEach((element) => {
          console.log(element);
          if (element.name.toLowerCase() === features[0]?.properties.city.toLowerCase()) {
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
              image.style.maxWidth = "1250px";
              image.style.padding = "60px";
  
              container.appendChild(image);
            }

            // ELEMENT desc
            const desc = document.createElement("p");
            desc.setAttribute("id", "desc");
            desc.innerText = element.desc;

            container.appendChild(desc);
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

    document.body.appendChild(closeContainer);

    closeContainer.addEventListener("click", () => {
      map.flyTo({ center: [35.21279633240056, 39.11766792630007], zoom: 5, speed: 0.3 });
      container.remove();
      closeContainer.remove();
    });
  });
};
