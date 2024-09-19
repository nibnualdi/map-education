import { GEOJSON as GROUP } from "../constants/geojson";
import { colors } from "../constants/colors";
import { customMatrix } from "../constants/matrix";

let finalPolygon: any = [];
let finalColor: any = [];

let totalVertex = 0;
let newfinalColor: any;
let newfinalPolygon: any;

/**Coloring algorithm step for 1 vertex
 * I need to run this function to make a proper coloring
 */
function color(vertex: number, G: any, color_class: any) {
  if (vertex >= G.length) return false;

  /* Iterate through every color class */
  var get_color = false;
  for (var ccindex = 0; !get_color && ccindex < color_class.length; ++ccindex) {
    /* Checks if we can put the vertex to the given color, or not */
    var found = false;
    for (var i = 0; !found && i < color_class[ccindex].length; ++i) {
      var current_vertex = color_class[ccindex][i];
      if (G[vertex][current_vertex] != 0) found = true;
    }
    /* If there is not conflict, we can put it into the ccindex. color */
    if (!found) {
      color_class[ccindex].push(vertex);
      get_color = true;
    }
  }
  /* If we can't color it, we need a new color class */
  if (!get_color) {
    /* Put vertex to color class */
    color_class.push([vertex]);
  }

  // Push color for final array result
  color_class.forEach((element: any, index: number) => {
    element.forEach((each: any) => {
      // remove the condition when matrix is renew
      if (GROUP[each]) {
        finalPolygon.push(GROUP[each].properties.village);
        finalColor.push(colors[index]);
      }
    });
  });

  return color_class;
}

/** Get matrix from the raw string data (0-1 table with spaces and new lines) */
function getMatrix(data: any) {
  data = data.replace(/\s+/g, ""); //eliminate whitespaces
  //if the length is not a square number, it can't be a square matrix
  if (Math.sqrt(data.length) % 1 !== 0) {
    alert("Bad input: It can't be a square matrix.");
    return false;
  }
  var patt = /^[0-1]+$/; //It can contain only 0's and 1's
  if (!patt.test(data)) {
    alert("Bad input: It can't be 0-1 squared matrix");
    return false;
  }
  var size = Math.sqrt(data.length);
  var Mtx: any = [];
  for (var i = 0; i < size; ++i) {
    Mtx[i] = [];
    for (var j = 0; j < size; ++j) {
      Mtx[i][j] = data[i * size + j];
    }
  }
  console.log(Mtx, "Mtx");
  return Mtx;
}

/** Is it and undirected graph, without loops? */
function isSimpleGraph(G: any[]) {
  for (var i = 0; i < G.length; ++i) {
    if (G[i][i] != 0) {
      alert("The graph contains looops!");
      return false;
    }
    for (var j = i; j < G.length; ++j) {
      if (G[i][j] !== G[j][i]) {
        alert("The graph not undirected!");
        return false;
      }
    }
  }
  return true;
}

var G = [];
var color_class: any = []; //color classes


function init() {
  // G = Matrix inside Array two dimentional
  G = [];
  color_class = [];
}

function main() {
  init();

  //get data
  var data = customMatrix;
  G = getMatrix(data); //get matrix from data
  //if it's simple graph
  if (isSimpleGraph(G)) {
    //color it step by step with delay
    var vertex = 0;
    while (vertex < G.length) {
      color_class = color(vertex, G, color_class);
      ++vertex;
    }

    totalVertex = vertex;

  }
  console.log(color_class, "color_class")
}
main();

newfinalPolygon = finalPolygon.slice(finalColor.length - totalVertex, finalColor.length);
newfinalColor = finalColor.slice(finalColor.length - totalVertex, finalColor.length);

export { newfinalPolygon, newfinalColor };
