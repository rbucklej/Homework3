var url = 'https://api-v3.mbta.com/vehicles?api_key=7347704f744f4c69b536525085cf0d8f&filter[route]=1&include=trip'
var fetch = require('node-fetch')

function fetchurl(){
    fetch(url)
    .then(function(response){
            return response.json()})
    .then(function(json){
        var buses = json.data
        console.log(new Date())
        console.log(buses)
           }) 
}

fetchurl()
setInterval(function(){
    fetchurl()
   },15000);