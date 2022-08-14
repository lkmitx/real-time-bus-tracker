// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// Mapbox default public access token
mapboxgl.accessToken = 'pk.eyJ1IjoibGF0aWtha2VlZ2FuIiwiYSI6ImNsNWlsZDc5MzA4enUzY285MHF3bTdmYXMifQ.oS5sfoxz74MoKZMC7aZ4ng';

// Map instance
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [-71.104081, 42.365554],
  zoom: 14,
});

var reverseButton = document.getElementById("reverse");
var moveButton = document.getElementById("move");

// Add marker to the map at the first set of coordinates in the array busStops.
var marker = new mapboxgl.Marker({ color: "#FF1100", rotation: 45 })
  .setLngLat(busStops[0])
  .addTo(map);

// counter is index of current bus stop
let counter = 0;
function move() {
  reverseButton.disabled = true;
  setTimeout(() => {
    if (counter === (busStops.length-1)) { 
      reverseButton.disabled = false;
      return;
    }
    else { 
      counter++; 
    }
    marker.setLngLat(busStops[counter]);
    move();
  }, 1000);
}

function reverse() {
  moveButton.disabled = true;
  setTimeout(() => {
    if (counter != 0) {
      counter--;
    } else {
      moveButton.disabled = false;
      return;
    }
    marker.setLngLat(busStops[counter]);
    reverse();
  }, 1000);
}
