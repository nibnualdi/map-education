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

    document.body.appendChild(container);

    // get data from api
    axiosInstance
      .get("polygons")
      .then((res) => {
        // console.log(res.data, "res");

        res.data.forEach((element) => {
          console.log(element)
          if (element.name.toLowerCase() === features[0]?.properties.city.toLowerCase()) {
            // ELEMENT title
            const title = document.createElement("h1");
            title.setAttribute("id", "title");
            title.innerText = element.name;

            container.appendChild(title);

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
    const closeContainer = document.createElement("button");
    closeContainer.setAttribute("id", "closeContainer");
    closeContainer.innerText = "close";

    closeContainer.style.position = "absolute";
    closeContainer.style.right = "0";
    closeContainer.style.top = "0";
    closeContainer.style.zIndex = "10";

    document.body.appendChild(closeContainer);

    closeContainer.addEventListener("click", () => {
      map.flyTo({ center: [35.21279633240056, 39.11766792630007], zoom: 5, speed: 0.3 });
      container.remove();
      closeContainer.remove();
    });
  });
};
