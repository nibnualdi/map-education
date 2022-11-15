import mapboxgl from "mapbox-gl";
import { TURKEY_GEOJSON } from "./utils/geojson";
import { newfinalPolygon, newfinalColor } from "./script";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmlibnVhbGRpIiwiYSI6ImNsM285ZTU2bjAwbXUzaW1qYmM2cnphZnoifQ.eidSFHrIo4UMhyRLRE1x6w";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/nibnualdi/cl9p43y62000114pedf80wf6h",
  center: [117.517239822058, -2.2513074707572542], // starting position [lng, lat]
  zoom: 5,
  projection: "globe",
});

let hoverPolygon = "";
let { mousePositionX, mousePositionY } = 0;

map.on("style.load", () => {
  map.setFog({}); // Set the default atmosphere style
});

map.on("style.load", () => {
  TURKEY_GEOJSON.forEach((e, i) => {

    // make the layers
    let indexNewfinalPolygon = newfinalPolygon.findIndex((element)=>{
      return element === e.properties.city
    });

    let color = newfinalColor[indexNewfinalPolygon];

    map.addSource(`${e.properties.city + i}`, {
      type: "geojson",
      data: e,
    });

    map.addLayer({
      id: `${e.properties.city + i}`,
      type: "fill",
      source: `${e.properties.city + i}`,
      paint: {
        "fill-color": color,
      },
    });
  });
});

map.on("load", () => {
  map.flyTo({ center: [35.21279633240056, 39.11766792630007], zoom: 5, speed: 0.3 });
});

// make the tooltips
// ELEMENT tooltip
const tooltip = document.createElement("span");
tooltip.setAttribute("id", "cityName");

document.addEventListener("mousemove", (e)=>{
  mousePositionX = e.clientX
  mousePositionY = e.clientY
  tooltip.style.top = `${mousePositionY + 10}px`;
  tooltip.style.left = `${mousePositionX + 10}px`;
})

TURKEY_GEOJSON.forEach((e, i) => {

  // make the tooltips
  map.on("mouseover", `${e.properties.city + i}`, () => {
    if (hoverPolygon !== "") {
      hoverPolygon = "";
      tooltip.innerText = hoverPolygon;
    }
    hoverPolygon = e.properties.city;
    
    tooltip.innerText = hoverPolygon;
    
    tooltip.style.position = "absolute";
    tooltip.style.backgroundColor = "pink";
    document.body.style.cursor = "pointer";
    
    document.body.appendChild(tooltip);
  });
  
  map.on("mouseleave", `${e.properties.city + i}`, () => {
    if (hoverPolygon !== "") {
      hoverPolygon = "";
    }
    hoverPolygon = "";
    tooltip.innerText = hoverPolygon;
  });
  
  // make the container for full desc
  map.on("click", `${e.properties.city + i}`, (eMap) => {
    map.flyTo({ center: [eMap.lngLat.lng, eMap.lngLat.lat], zoom: 8, speed: 0.3 });

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

    // ELEMENT title
    const title = document.createElement("h1");
    title.setAttribute("id", "title");
    title.innerText = "Lorem Ipsum Color Sit Amet";
    
    container.appendChild(title);
    
    // ELEMENT desc
    const desc = document.createElement("p");
    desc.setAttribute("id", "desc");
    desc.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    container.appendChild(desc);
    
    // ELEMENT close button container
    const closeContainer = document.createElement("button");
    closeContainer.setAttribute("id", "closeContainer");
    closeContainer.innerText = "close";
    
    closeContainer.style.position = "absolute";
    closeContainer.style.right = "0";
    closeContainer.style.top = "0";
    closeContainer.style.zIndex = "10";
    
    document.body.appendChild(closeContainer);

    closeContainer.addEventListener("click", ()=>{
      map.flyTo({ center: [35.21279633240056, 39.11766792630007], zoom: 5, speed: 0.3 });
      container.remove();
      closeContainer.remove();
    });
  });
  
});
