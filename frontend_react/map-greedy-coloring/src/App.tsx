import { GEOJSON } from "./constants/geojson";
// @ts-ignore
import { newfinalPolygon, newfinalColor } from "./utils/greedyColoringAlgorithm";

import { lazy, Suspense, useEffect, useRef, useState } from "react";
import "./App.css";

import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

const Article = lazy(() => import("./components/Article"));

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

function App() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [lng] = useState(114.070077);
  const [lat] = useState(-1.960683);
  const [zoom] = useState(5);

  const [isArticleOpen, setIsArticleOpen] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState("");

  // load map
  useEffect(() => {
    if (map.current) return; // initialize map only once
    if (!mapContainer.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: import.meta.env.VITE_MAPBOX_STYLE,
      center: [lng, lat],
      zoom: zoom,
      dragPan: false,
      scrollZoom: false,
      dragRotate: false,
      doubleClickZoom: false,
      keyboard: false,
      touchZoomRotate: false,
      boxZoom: false,
    });
  });

  useEffect(() => {
    if (!map.current) return;
    map.current.on("style.load", () => {
      GEOJSON.forEach((e) => {
        // make the layers
        let indexNewfinalPolygon = newfinalPolygon.findIndex((element: any) => {
          if (!element) return;
          return element === e.properties.village;
        });

        let color = newfinalColor[indexNewfinalPolygon];

        map.current.addSource(`${e.properties.village}`, {
          type: "geojson",
          data: e,
        });

        map.current.addLayer({
          id: `${e.properties.village}`,
          type: "fill",
          source: `${e.properties.village}`,
          paint: {
            "fill-color": color,
          },
        });
      });
    });
  });

  useEffect(() => {
    map.current.on("load", () => {
      map.current.flyTo({ center: [106.82938, -6.18624], zoom: 12, speed: 0.3 });
    });
  });

  useEffect(() => {
    map.current.on("idle", () => {
      map.current.scrollZoom.enable();
      map.current.dragPan.enable();
      map.current.dragRotate.enable();
      map.current.keyboard.enable();
      map.current.doubleClickZoom.enable();
      map.current.touchZoomRotate.enable();
      map.current.boxZoom.enable();
    });
  });

  useEffect(() => {
    GEOJSON.forEach((geojson) => {
      const village = geojson.properties.village;
      map.current.on("click", village, (e: any) => {
        map.current.flyTo({ center: [e.lngLat.lng, e.lngLat.lat], zoom: 14, speed: 0.3 });
        console.log(e.lngLat.lng, e.lngLat.lat, "isinya apa ya?")
        setSelectedLayer(village);
        setIsArticleOpen(true);
      });
    });
  });

  return (
    <div className="w-full h-full">
      {isArticleOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <Article setIsArticleOpen={setIsArticleOpen} selectedLayer={selectedLayer} />
        </Suspense>
      )}

      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default App;
