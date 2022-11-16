import { map } from "../utils/mapInstance";

let hoverPolygon = "";
let { mousePositionX, mousePositionY } = 0;

const tooltip = document.createElement("span");
tooltip.setAttribute("id", "cityName");

document.addEventListener("mousemove", (e) => {
  mousePositionX = e.clientX;
  mousePositionY = e.clientY;
  tooltip.style.top = `${mousePositionY + 10}px`;
  tooltip.style.left = `${mousePositionX + 10}px`;
});

export const Tooltip = (e, i) => {
  map.on("mouseover", `${e.properties.city + i}`, () => {
    if (hoverPolygon !== "") {
      hoverPolygon = "";
      tooltip.innerText = hoverPolygon;
    }
    hoverPolygon = e.properties.city;
  
    tooltip.innerText = hoverPolygon;
  
    tooltip.style.position = "absolute";
    tooltip.style.backgroundColor = "pink";
    tooltip.style.fontSize = "25px";
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
}