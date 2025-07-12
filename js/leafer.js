import L, { Map, TileLayer, Marker, Icon } from 'leaflet';
var map = L.map('map').setView([30.244314437207148, -97.76567748716134], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
