// async function fetchWeather() {
//     const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
//     const options = {
//         method: 'GET',
//         headers: {

//             'X-RapidAPI-Key': '556abe7f4bmsh69a8dca590272a3p19d3e9jsnfb6d9566d17c',
//             'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//         // cloud_pct.innerHTML = response.cloud_pct.innerHTML
//         document.getElementById("temp").innerHTML=result.temp;

//         temp.innerHTML=response.temp;
//         temp.innerHTML = response.temp
//         feels_like.innerHTML = response.feels_like
//         humidity.innerHTML = response.humidity
//         min_temp.innerHTML = response.min_temp
//         max_temp.innerHTML = response.max_temp
//         wind_speed.innerHTML = response.wind_speed
//         wind_Deg.innerHTML = response.wind_Deg
//         sunrise.innerHTML = response.sunrise
//         sunset.innerHTML = response.sunset
//     } catch (error) {
//         console.error(error);
//     }
// }

//fetchWeather();
const getWeather = (city) => {

document.getElementById('cityName').innerHTML = city
const apiUrl = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= ' + city   ;

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
  document.getElementById('temp2').innerHTML = data.temp1;
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
}

submit.addEventListener( "click" , (e) => {
    e.perventDefault()
    getWeather(city.value)
})
getWeather( Delhi ) 
