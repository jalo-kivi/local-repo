const frekwencja = {
  "dolnośląskie": 65.53,
  "kujawsko-pomorskie": 63.41,
  "lubelskie": 65.58,
  "lubuskie": 61.89,
  "łódzkie": 68.22,
  "małopolskie": 69.71,
  "mazowieckie": 73.4,
  "opolskie": 57.64,
  "podkarpackie": 65.62,
  "podlaskie": 64.26,
  "pomorskie": 69.06,
  "śląskie": 66.22,
  "świętokrzyskie": 63.89,
  "warmińsko-mazurskie": 60.46,
  "wielkopolskie": 67.19,
  "zachodniopomorskie": 63.43
}; //źródło: https://wybory.gov.pl/prezydent2025/pl/frekwencja/pl

const width = 1000;
const height = 700;

//dodanie do #map konteneru na grafike wektorowa (svg)
const svg = d3.select("#map")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Skala kolorów - paleta pomaranczowo-czerwona z d3
const color = d3.scaleSequential()
  .domain([57.64, 73.4])  // Zakres frekwencji
  .interpolator(d3.interpolateOrRd);

//projection, ustawienie środka Polski, zoomu i przesuniecie mapy na srodek ekranu
const projection = d3.geoMercator()
  .center([19.1451, 52.13]) 
  .scale(3500)
  .translate([width / 2, height / 2]);

//geoPath() - generator sciezki svg 
const path = d3.geoPath().projection(projection);

//dymek z info po najechaniu myszką
const tooltip = d3.select("#tooltip");


// Ładowanie GeoJSON
d3.json("https://raw.githubusercontent.com/ppatrzyk/polska-geojson/master/wojewodztwa/wojewodztwa-medium.geojson").then(geoData => {
  svg.selectAll("path")
    .data(geoData.features)
    .join("path") //dla kazdego wojewodztwa jest tworzony path svg
    .attr("d", path) //kształt
    .attr("fill", d => {
      const woj = d.properties.nazwa;
      const val = frekwencja[woj];
      return val ? color(val) : "#ccc"; //ze skali kolorow, odpowiedni kolor dla kazdego woj, domyslnie szary
    })
    .attr("cursor", "pointer")
    
    .on("mouseover", function (event, d) { //dedykowana metoda d3 do obslugi zdarzen
      d3.select(this).classed("hovered", true);
      const woj = d.properties.nazwa;
      const val = frekwencja[woj];
      tooltip
        .style("display", "block")
        .html(`<strong>${woj}</strong><br>frekwencja: ${val ? val + "%" : "brak danych"}`);
    })
    .on("mousemove", function (event) {
      tooltip
      //ustawienie pozycji tooltipa, przesuniecie zeby nie nachodzil na kursor
        .style("left", (event.pageX + 12) + "px") 
        .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function () {
      d3.select(this).classed("hovered", false);
      tooltip.style("display", "none");
    })
});