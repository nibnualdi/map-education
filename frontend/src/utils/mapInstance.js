import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmlibnVhbGRpIiwiYSI6ImNsM285ZTU2bjAwbXUzaW1qYmM2cnphZnoifQ.eidSFHrIo4UMhyRLRE1x6w";
export const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/nibnualdi/cl9p43y62000114pedf80wf6h",
  center: [117.517239822058, -2.2513074707572542], // starting position [lng, lat]
  zoom: 5,
  projection: "globe",
});