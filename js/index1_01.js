/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    check_user();

}

function check_user(){

  console.log("on index.js");
  var singIn_btn = document.getElementById("signIn-Nav-btn");
  var signText = document.getElementById("signText");


  firebase.auth().onAuthStateChanged( function(user){
   if (user){
     console.log( "[+] user is : " + user.displayName);
     signText.innerHTML= "Logout!";
     //enable buttons
     var maps_BTN = document.getElementById("maps-Nav-Btn");
     var weather_BTN = document.getElementById("weather-Nav-Btn");
     var currency_BTN = document.getElementById("currency-Nav-Btn");

     maps_BTN.classList.remove("inactiveLink");
     weather_BTN.classList.remove("inactiveLink");
     currency_BTN.classList.remove("inactiveLink");
     dohome(1);

     buttons_signed_in(user);
     singIn_btn.addEventListener("click", function(){
       console.log("[+] in logout click");
       signOut();
     });
   } else {
    console.log("[+] no user : " +user);
    signText.innerHTML= "Sign In";

    //disble buttons
    var maps_BTN = document.getElementById("maps-Nav-Btn");
    var weather_BTN = document.getElementById("weather-Nav-Btn");
    var currency_BTN = document.getElementById("currency-Nav-Btn");

    maps_BTN.classList.add("inactiveLink");
    weather_BTN.classList.add("inactiveLink");
    currency_BTN.classList.add("inactiveLink");

    dohome(2);
     buttons_not_signed_in();
     singIn_btn.addEventListener("click", function(){
       console.log("[+] in signIn  click ");
      SignIn_action();
     });
   }
  });

}


// helper functions to set  nav bar buttons

function buttons_not_signed_in(){
  var home_Cont = document.getElementById("home-Container");
  var home_Tittle = document.getElementById("home-tittle");

  var maps_Cont = document.getElementById("maps-Container");
  var weather_Cont = document.getElementById("weather-Container");
  var currency_Cont = document.getElementById("currency-Container");

  maps_Cont.style.display = "none";
  weather_Cont.style.display = "none";
  currency_Cont.style.display = "none";
  home_Cont.style.display = "block";
  home_Tittle.innerHTML = "";

  document.getElementById("home-btn").onclick = null;
  document.getElementById("maps-btn").onclick = null;
  document.getElementById("weather-btn").onclick = null;
  document.getElementById("currency-btn").onclick= null;

}


function buttons_signed_in(user){
  var home_Cont = document.getElementById("home-Container");
  var home_Tittle = document.getElementById("home-tittle");
  home_Cont.style.display = "block";
  home_Tittle.innerHTML = "Welcome: " + user.displayName;



  document.getElementById("home-btn").onclick = homeOnClick;
  document.getElementById("maps-btn").onclick = mapsOnClick;
  document.getElementById("weather-btn").onclick = weatherOnClick;
  document.getElementById("currency-btn").onclick= currencyOnClick;
}

 /*
 functions to add color and listener
 on user signed in the "click" will be enable
 and the user could click the and see the containers
 */
function homeOnClick(){
  Reset_nav_color();
  var home_BTN = document.getElementById("home-Nav-Btn");
  var home_Cont = document.getElementById("home-Container");
  select_Nav_item(home_BTN, home_Cont);
}

function mapsOnClick(){
  Reset_nav_color();
  var maps_BTN = document.getElementById("maps-Nav-Btn");
  var maps_Cont = document.getElementById("maps-Container");
  select_Nav_item(maps_BTN, maps_Cont);
  onMap();
}

function weatherOnClick(){
  Reset_nav_color();
  var weather_BTN = document.getElementById("weather-Nav-Btn");
  var weather_Cont = document.getElementById("weather-Container");
  select_Nav_item(weather_BTN, weather_Cont);
  doWeather();
}

function currencyOnClick(){
  Reset_nav_color();
  var currency_BTN = document.getElementById("currency-Nav-Btn");
  var currency_Cont = document.getElementById("currency-Container");
  select_Nav_item(currency_BTN, currency_Cont);
  doCurrency();
}

// helper functions
function Reset_nav_color(){

  //buttons ids
  var home_BTN = document.getElementById("home-Nav-Btn");
  var maps_BTN = document.getElementById("maps-Nav-Btn");
  var weather_BTN = document.getElementById("weather-Nav-Btn");
  var currency_BTN = document.getElementById("currency-Nav-Btn");

  home_BTN.style.color = "#FEFFFE";
  maps_BTN.style.color = "#FEFFFE";
  weather_BTN.style.color = "#FEFFFE";
  currency_BTN.style.color = "#FEFFFE";

  //container ids
  var home_Cont = document.getElementById("home-Container");

  var maps_Cont = document.getElementById("maps-Container");
  var weather_Cont = document.getElementById("weather-Container");
  var currency_Cont = document.getElementById("currency-Container");

  home_Cont.style.display = "none";
  maps_Cont.style.display = "none";
  weather_Cont.style.display = "none";
  currency_Cont.style.display = "none";


}
function select_Nav_item(BTN, cont){
  BTN.style.color = "#FF6663";
  cont.style.display = "block";
}
