
var fuck = 'fuck';
import L, { Map, TileLayer, Marker, Icon } from 'leaflet';

const LeafIcon = Icon.extend({
  options: {
    shadowUrl: 'leaf-shadow.png',
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
  }
});

const greenIcon = new LeafIcon({ iconUrl: 'leaf-green.png' });
const redIcon = new LeafIcon({ iconUrl: 'leaf-red.png' });
const orangeIcon = new LeafIcon({ iconUrl: 'leaf-orange.png' });

const marker = new Marker([30.244314437207148, -97.76567748716134], { icon: greenIcon }).addTo(map);

const mGreen = new Marker([30.444314437207148, -97.46567748716134], { icon: greenIcon }).bindPopup('I am a green leaf.').addTo(map);
const mRed = new Marker([30.344314437207148, -97.26567748716134], { icon: redIcon }).bindPopup('I am a red leaf.').addTo(map);
const mOrange = new Marker([30.144314437207148, -97.16567748716134], { icon: orangeIcon }).bindPopup('I am an orange leaf.').addTo(map);
