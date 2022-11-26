import { TURKEY_GEOJSON } from "./utils/geojson";
import { Polygons } from "./components/Polygons";
import { map } from "./utils/mapInstance";
import { Tooltip } from "./components/Tooltip";
import { Article } from "./components/Article";
import { Auth } from "./components/Auth";

map.on("style.load", () => {
  map.setFog({}); // Set the default atmosphere style
});

// add layer polygons to the map
Polygons();

map.on("load", () => {
  map.flyTo({ center: [35.21279633240056, 39.11766792630007], zoom: 5, speed: 0.3 });
  Auth();
});

TURKEY_GEOJSON.forEach((e, i) => {
  Tooltip(e, i);
  Article(e, i);
});