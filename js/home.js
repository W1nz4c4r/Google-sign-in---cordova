function dohome(id){
  if(id == 1){ //1 user logged in
    console.log("in id = 1");
    clear_Container();
  } else if (id == 2){ // 2 user not logged in
    console.log("in id =2");
    show_container();
  }

}

function clear_Container(){
  var container_NOT = document.getElementById("info-container-NOT");
  var container_YES = document.getElementById("info-container-YES");
  //show NOT logged in container
  container_NOT.style.display= "none";
  // show LOGGED in container
  container_YES.style.display= "block";
  //add action to the buttons in the container
  home_Action();
}

function show_container(){
  var container_NOT = document.getElementById("info-container-NOT");
  var container_YES = document.getElementById("info-container-YES");
  //show NOT logged in container
  container_NOT.style.display= "block";
  // show LOGGED in container
  container_YES.style.display= "none";

}


//if user is logged in give action to the buttons
function home_Action(){
  var weather_btn = document.getElementById("home-weather_btn");
  var weather_container = document.getElementById("weather-Container");
  var nav_weather_btn = document.getElementById("weather-Nav-Btn");

  var home_container = document.getElementById("home-Container");
  var nav_home_btn = document.getElementById("home-Nav-Btn");

  var currency_btn = document.getElementById("home-currency_btn");
  var currency_container = document.getElementById("currency-Container");
  var nav_currency_btn = document.getElementById("currency-Nav-Btn");

  //add listener to weather button
  weather_btn.addEventListener("click", function(){
    console.log("inside weather home btn");
    //set colors of the nav navBar
    nav_weather_btn.style.color = "#FF6663";
    nav_home_btn.style.color = "#FEFFFE";
    //hide current (home) container
    home_container.style.display = "none";
    //show weather container
    weather_container.style.display = "block";
    //call the page function
    doWeather();

  });


  //add listener to weather button
  currency_btn.addEventListener("click", function(){
    console.log("inside currency home btn");
    //set colors of the nav navBar
    nav_currency_btn.style.color = "#FF6663";
    nav_home_btn.style.color = "#FEFFFE";
    //hide current (home) container
    home_container.style.display = "none";
    //show weather container
    currency_container.style.display = "block";
    //call the page function
    doCurrency();

  });
}
