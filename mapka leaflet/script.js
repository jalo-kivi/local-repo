let map = L.map('map').setView([52.46, 16.78], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let marker = L.marker([52.4615, 16.7873]).addTo(map);
let marker2 = L.marker([52.430798, 16.677209]).addTo(map);
let marker3 = L.marker([52.427060, 16.876892]).addTo(map);

marker.bindPopup(`
  <div class="custom-popup">
    <h3>Jezioro Kierskie</h3>
    <p>Kiekrz</p>
    <a href="https://kliper.net.pl/czarter-jachtow-poznan/" target="_blank" class="popup-button">Czarter jachtu</a>
  </div>
`, {
  className: "leaflet-custom-popup",
  closeButton: false,
  closeOnClick: false,
  autoClose: false
}).openPopup();

marker2.bindPopup(`
  <div class="custom-popup">
    <h3>Jezioro Lusowskie</h3>
    <p>Lusowo</p>
    <a href="https://kliper.net.pl/czarter-jachtow-poznan/" target="_blank" class="popup-button">Czarter jachtu</a>
  </div>
`, {
  className: "leaflet-custom-popup",
  closeButton: false,
  closeOnClick: false,
  autoClose: false
}).openPopup();

marker3.bindPopup(`
  <div class="custom-popup">
    <h3>Jezioro Rusalka</h3>
    <p>Poznan</p>
    <a href="https://kliper.net.pl/czarter-jachtow-poznan/" target="_blank" class="popup-button">Czarter jachtu</a>
  </div>
`, {
  className: "leaflet-custom-popup",
  closeButton: false,
  closeOnClick: false,
  autoClose: false
}).openPopup();

let polygon = L.polygon([
    [52.447631, 16.80],
    [52.442714, 16.818103],
    [52.453595, 16.838702],
    [52.472421, 16.807117]
]).addTo(map);

let hoverStyle = {
  color: "#008000",
  weight: 4,
  fillColor: "#ccffcc",
  fillOpacity: 0.6
};

let defaultStyle = {
  color: "#3388ff",
  weight: 3,
  fillColor: "#3388ff",
  fillOpacity: 0.4
};

polygon.on("mouseover", () => {
  polygon.setStyle(hoverStyle);
});

polygon.on("mouseout", () => {
  polygon.setStyle(defaultStyle); // Przywracamy oryginalny styl
});

map.on("click", (e) => {
  const coords = e.latlng;
  const coordsText = `Latitude: ${coords.lat}, Longitude: ${coords.lng}`;
  
  navigator.clipboard.writeText(coordsText).then(function() {
                
    document.getElementById('message').textContent = `Copied: ${coordsText}`;
    }).catch(function(err) {
                
    document.getElementById('message').textContent = 'Error - cannot copy.';
    });
});




function validateInputs(lat, lng, popupText, buttonText) {
  if (lat < -90 || lat > 90) {
      return "Szerokość geograficzna (Lat) musi być w zakresie od -90 do 90.";
  }
  if (lng < -180 || lng > 180) {
      return "Długość geograficzna (Lng) musi być w zakresie od -180 do 180.";
  }
  return 0;
}

document.getElementById('addMarker').addEventListener("click", () => {
  const lat = parseFloat(document.getElementById('lat').value);
  const lng = parseFloat(document.getElementById('lng').value);
  const popupText = document.getElementById('popupText').value;
  const buttonText = document.getElementById('buttonText').value;
  const markerColor = document.getElementById('markerColor').value;
  const errorMessage = document.getElementById('errorMessage');
  
  const validationError = validateInputs(lat, lng, popupText, buttonText);
  if (validationError) {
    errorMessage.textContent = validationError;
    return;
  }
  
  errorMessage.textContent = "";
  
  const markerHtmlStyles = (color) => `
  background-color: ${color};
  width: 20px;
  height: 20px;
  display: block;
  position: relative;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  border: 2px solid white;
`;

const icon = L.divIcon({
  className: "", 
  html: `<span style="${markerHtmlStyles(markerColor)}"></span>`,
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -40]
});
  
  const newMarker = L.marker([lat, lng], { icon }).addTo(map);
  
  newMarker.bindPopup(`
  <div class="custom-popup">
    <h3>${popupText}</h3>
    <p>Współrzędne: ${lat.toFixed(3)}, ${lng.toFixed(3)}</p>
    <a href="#" target="_blank" class="popup-button">${buttonText}</a>
  </div>
`, {
  className: "leaflet-custom-popup",
  closeButton: false,
  closeOnClick: false,
  autoClose: false
}).openPopup();
});
