const apiUrl ='https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';

fetch(apiUrl, {
  headers: {
    'X-RapidAPI-Key': '556abe7f4bmsh69a8dca590272a3p19d3e9jsnfb6d9566d17c',
             'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
})
.then(response => response.json())
.then(data => {
  // Set the innerHTML of the HTML elements with the corresponding IDs
  document.getElementById('temp').innerHTML = data.temp;
  document.getElementById('temp2').innerHTML = data.tempadd;
  document.getElementById('min_temp').innerHTML = data.min_temp;
  document.getElementById('max_temp').innerHTML = data.max_temp;
  document.getElementById('wind_Deg').innerHTML = data.wind_Deg;
  document.getElementById('sunrise').innerHTML = data.sunrise;
  document.getElementById('sunset').innerHTML = data.sunset;
  document.getElementById('feels_like').innerHTML = data.feels_like;
  document.getElementById('humidity').innerHTML = data.humidity;
  document.getElementById('humidity2').innerHTML = data.humidity;
  document.getElementById('wind_speed').innerHTML = data.wind_speed;
  document.getElementById('wind_speed2').innerHTML = data.wind_speed;
  
  

    
})
.catch(error => console.error(error));