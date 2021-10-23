//weather API KEY
const WEATHER_API_KEY  = "/*OpenWeatherMaps API KEY*/";
const URL = "https://api.openweathermap.org/data/2.5/weather?appid=";



function doWeather(){
  console.log("in do weather");
  //declaration of variables
  var go_btn = document.getElementById("Go_button");
  var location_btn = document.getElementById("location_button");
  var back_btn = document.getElementById("backBTN");
  //give listener to the buttons
  go_btn.addEventListener("click", function(){
    console.log("[+] on go_btn listener");
    onGo();
  });

  back_btn.addEventListener("click", function(){
    console.log("[+] on back_btn listener");
    onBack();
  });
}


function onGo(){
  console.log("[+] onGo function");
  //setting the div --> results visible to user and hidding the question part
  var sec_Result = document.querySelector("#Results");
  sec_Result.style.display= "block";
  //hidding the questionFORM
  var back_Sec = document.querySelector("#questionFORM");
  back_Sec.style.display = "none";

  //getting user input
  var value = document.getElementById("user_Input").value;


  //check input empty
  if(value == ""){
  //  api_Results.style.fontWeight = "900";
    var error_MSG = "Can not look for an empty value!!!";
    var elem1 = document.createElement("p");
    elem1.innerHTML = error_MSG;
    addContent(elem1);
    return;
  }


  //check if the user_Input is number or not
  if (isNaN(value)){ //in if city name entered

    console.log("City Detected");
    var url = URL + WEATHER_API_KEY + "&q=" + value; // creates the full url to look for
    console.log( url);
    xmlRequest(url, onWeatherSuccess, onWeatherFail);
  }
  //if it is number --> then is ZIP-CODE
  else {
    console.log("ZIP-Code detected");
    //cheking if the length for the zip code is okey
    if (value.length != 5){
      //can not change tittle alert due to security issues
      alert("Wrong Zip-code format!");
    } else{
      var url = URL + WEATHER_API_KEY + "&zip=" + value;
      console.log(url);
      xmlRequest(url, onWeatherSuccess, onWeatherFail);
    }
  }

}

//request function
function xmlRequest(url, onSuccess, onFailure){
    var request = new XMLHttpRequest();

    request.onreadystatechange = function(){
      if (this.readyState == 4 & this.status == 200){
        /*
        if ready state == " request finished and response ready"
        AND if status ==  " 200 --> OK"
        then do something
        */
        console.log(JSON.parse(this.responseText));
        onSuccess(JSON.parse(this.responseText));
      }
      else if ( this.readyState == 4){
        console.log("fail!!!");
        onFailure(this.status);
      }
    };
    request.open("GET", url, true);
    request.send();
}

function onWeatherSuccess(data){
  var results_tittle =  document.getElementById("tittle_place");
  var city_Name = data.name;
  var tittle = "Weather for " + city_Name + ":";
  results_tittle.innerHTML = tittle;
  //addMapContent(new Gmap(data.coord.lat, data.coord.lon));
  var country = data.sys.country;
  var temp = K_to_C(data.main.temp);
  var min_Temp = K_to_C(data.main.temp_min);
  var max_Temp = K_to_C(data.main.temp_max);
  var desc = data.weather[0].description;
  var icon = data.weather[0].icon;
  var pressure =  data.main.pressure;
  var humid = data.main.humidity;
  generate_table(country, temp, min_Temp, max_Temp, desc, pressure, humid);

}

function onWeatherFail(data){
  alert("Failed to a response from the weather API. The failed code is: " + toString(status));
}

//Function to create table so it makes it  looks nicer
function generate_table(country, temp, min_Temp, max_temp, description, pressure, humid){
  //obtain the "API_results" element to place the results fo the search
  var api_Results = document.getElementById("API_results");

  //create and element <table> and <tbody>
  var table = document.createElement("table");
  var tbody = document.createElement("tbody");

  //create cell to input the info
  for ( var i=0; i < 7; i++){
    //create row
    var row = document.createElement("tr");
    for( var j = 0; j < 2; j++){
      /*create an element <td> and a textNode, text noda is
      going to be inside <td> (population of data)*/
      var cel = document.createElement("td");
      if( i ==0 & j == 0 ){
        var cel_Name = document.createTextNode("Country");
        cel.appendChild(cel_Name);
      } else if( i ==0 & j == 1 ){
        var cel_Text = document.createTextNode(country);
        cel.appendChild(cel_Text);
      } else if( i ==1 & j == 0 ){
        var cel_Name = document.createTextNode("Temperature");
        cel.appendChild(cel_Name);
      } else if( i ==1 & j == 1 ){
        var cel_Text = document.createTextNode(temp + "°C");
        cel.appendChild(cel_Text);
      } else if( i ==2 & j == 0 ){
        var cel_Text = document.createTextNode("Min temperature");
        cel.appendChild(cel_Text);
      } else if( i ==2 & j == 1 ){
        var cel_Text = document.createTextNode(min_Temp + "°C");
        cel.appendChild(cel_Text);
      } else if( i ==3 & j == 0 ){
        var cel_Text = document.createTextNode("Max temperature");
        cel.appendChild(cel_Text);
      } else if( i ==3 & j == 1 ){
        var cel_Text = document.createTextNode(max_temp + "°C");
        cel.appendChild(cel_Text);
      } else if( i ==4 & j == 0 ){
        var cel_Text = document.createTextNode("description");
        cel.appendChild(cel_Text);
      } else if( i ==4 & j == 1 ){
        var cel_Text = document.createTextNode(description);
        cel.appendChild(cel_Text);
      } else if( i ==5 & j == 0 ){
        var cel_Text = document.createTextNode("Pressure");
        cel.appendChild(cel_Text);
      } else if( i ==5 & j == 1 ){
        var cel_Text = document.createTextNode(pressure + "   hPa");
        cel.appendChild(cel_Text);
      } else if( i ==6 & j == 0 ){
        var cel_Text = document.createTextNode("humidity");
        cel.appendChild(cel_Text);
      } else if( i ==6 & j == 1 ){
        var cel_Text = document.createTextNode(humid + "%");
        cel.appendChild(cel_Text);
      }

      row.appendChild(cel);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  api_Results.appendChild(table);
  table.setAttribute("border", "2");
}


//helper functionts
function addContent(elem){
  var api_Results = document.getElementById("API_results");
  api_Results.appendChild(elem);
}

function reset_Results(){ //cleans the API_results section
  var api_Results = document.getElementById("API_results");
  api_Results.innerHTML = "";
  var results_tittle =  document.getElementById("tittle_place");
  results_tittle.innerHTML="";
}


//Helper function that will turn the temperature into Celsius
function K_to_C(temp){
  var celsius = (temp - 273.15);
  var cel2  = celsius.toFixed(2);
  console.log("the temperature in C is: " + cel2);
  return cel2;
}

//back button that shows again the query part
function onBack(){
  //setting the div --> results visible to user and hidding the question part
  var back_Sec = document.querySelector("#questionFORM");
  back_Sec.style.display = "block";
  //hidding results part
  var sec_Result = document.querySelector("#Results");
  sec_Result.style.display = "none";
  reset_Results();
}
