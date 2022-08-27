/////////////////////////
// PIECES OF THE API URL
/////////////////////////

//API key used for open weather
let apiKey = "0a1df883719240b6cd52bd57a3d1cc6c";

/////////////////////////
// VARIABLES
/////////////////////////
let searchKey = "";
// let location = "";

// FUNCTION
$(document).ready(function(){
    $("#submit").click(function() {
      let location = $("#location").val();
      //Check if zip code or city
      if (!isNaN(location)){
          searchKey = "zip";
      }else{
        searchKey = "q";
      }
      // Check if text area had data
      if(location != ""){
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?" + searchKey + "=" + location + "&units=imperial&appid=" + apiKey,
            dataType:"jsonp",
            type:"GET",
            success: function(data) {
                let result = outputData(data);
                 $ ("#outputData").html(result);
                 $("#outputData").val('');
          }
        
        })
      }
    })
});

function outputData(data){
  //Return the html string of all the desired data
  return "<div><h2> Weather in " + data.name + "</h2>" + "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' width=100px>" + 
  "<h4> Weather: " + data.weather[0].main + "<br>" + 
  "Description: " + data.weather[0].description + "<br>" + 
  "Temperature: " + data.main.temp + "F <br>" + 
  "High Temp: " + data.main.temp_max + "F <br>" +
  "Low Temp: " + data.main.temp_min + "F <br>" +
  "Pressure: " + data.main.pressure + "hPa <br>" +
  "Humidity: " + data.main.humidity + "% <br>" +
  "Visibility: " + data.visibility + " meters <br>" +
  "Wind Speed " + data.wind.speed + " m/sec <br>" +
  "Wind Direction: " + data.wind.deg + "degrees </h4></div>";
};



