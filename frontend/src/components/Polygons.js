import { map } from "../utils/mapInstance";
import { TURKEY_GEOJSON } from "../utils/geojson";
import { newfinalPolygon, newfinalColor } from "../script";

export const Polygons = () => {
  map.on("style.load", () => {
    TURKEY_GEOJSON.forEach((e, i) => {
      // make the layers
      let indexNewfinalPolygon = newfinalPolygon.findIndex((element) => {
        return element === e.properties.city;
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
}