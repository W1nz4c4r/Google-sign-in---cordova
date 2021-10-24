function onMap(){
  console.log("[+] on map function!");
  //declaration of variables
  var toWeather_btn = document.getElementById("map-to-results-btn");

  var nav_weather_btn = document.getElementById("weather-Nav-Btn");
  var weather_container = document.getElementById("weather-Container");

  var nav_map_btn = document.getElementById("maps-Nav-Btn");
  var map_container = document.getElementById("maps-Container");

  //giving listner
  toWeather_btn.addEventListener("click", function (){
    console.log("[+] on MAP to weather Listener");
    map_container.style.display = "none";
    weather_container.style.display = "block";
    nav_map_btn.style.color = "#FEFFFE";
    nav_weather_btn.style.color = "#FF6663";
    doWeather();
  });
}
