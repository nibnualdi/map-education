import { map } from "../utils/mapInstance";
import { TURKEY_GEOJSON } from "../utils/geojson";
import { newfinalPolygon, newfinalColor } from "../script";

export const Polygons = () => {
  map.on("style.load", () => {
    TURKEY_GEOJSON.forEach((e) => {
      // make the layers
      let indexNewfinalPolygon = newfinalPolygon.findIndex((element) => {
        return element === e.properties.city;
      });
  
      let color = newfinalColor[indexNewfinalPolygon];
  
      map.addSource(`${e.properties.city}`, {
        type: "geojson",
        data: e,
      });
  
      map.addLayer({
        id: `${e.properties.city}`,
        type: "fill",
        source: `${e.properties.city}`,
        paint: {
          "fill-color": color,
        },
      });
    });
  });
}