function signOut(){
  console.log("[+] on signOut()");
  var home_BTN = document.getElementById("home-Nav-Btn");
  var maps_BTN = document.getElementById("maps-Nav-Btn");
  var weather_BTN = document.getElementById("weather-Nav-Btn");
  var currency_BTN = document.getElementById("currency-Nav-Btn");

  home_BTN.style.color = "#FEFFFE";
  maps_BTN.style.color = "#88A0A8";
  weather_BTN.style.color = "#88A0A8";
  currency_BTN.style.color = "#88A0A8";
  //do google signOut
  firebase.auth().signOut().then(() => {
      console.log("[+] user sign out correctly ")
    }).catch((error) => {
      // An error happened.
    });

}
