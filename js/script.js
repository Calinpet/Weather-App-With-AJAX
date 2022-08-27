//console.log("connected")
/////////////////////////
// PIECES OF THE API URL
/////////////////////////




/////////////////////////
// VARIABLES
/////////////////////////
let apiKey = "0a1df883719240b6cd52bd57a3d1cc6c";
let searchKey = "";
$(document).ready(function(){
    $("#submit").click(function() {
      let location = $("#location").val();
      //Check if zip code or city
      if (!isNaN(location)){
          searchKey = "zip"
      }else{
        searchKey = "q"
      }
      // Check if text area had data
      if(location != ""){
        $.ajax({
          
        })
      }
    })
})



//console.log(URL)