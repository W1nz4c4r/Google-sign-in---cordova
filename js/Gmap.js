//DEFAULT VALUES TO MAKE THE MAP WORK AT THE beginning
var latitude = 4.624335;
var longitude = -74.063644;

class Gmap{
  constructor(lat, lon){
    console.log("si funciona");
    console.log("lat is: " + lat);
    console.log("lon is: " + lon);
    latitude = lat;
    longitude = lon;
    initMap();
  }
}

function initMap(){

  console.log("lat in initMap() is: " + latitude);
  //.log("lon is : " + longitude );

  //creating options wanted for the map
  var location = {lat: latitude, lng: longitude};
  var map = new google.maps.Map(document.getElementById("map"), {
      zoom:15,
      center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
