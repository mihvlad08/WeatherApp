let button = document.querySelector(".removeForm");
let input = document.querySelector(".input-text");
// Fetched data variables
let currentTemp = document.querySelector(".currentTemp");
let highTemp = document.querySelector(".highTemp");
let lowTemp = document.querySelector(".lowTemp");
let country = document.querySelector('.country')

let feelsLike = document.querySelector(".feelsLike");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".windSpeed");

let dewPt = document.querySelector(".dewPt");
let visibility = document.querySelector(".visibility");
let pressure = document.querySelector(".pressure");

let city = document.querySelector(".city");
let description = document.querySelector(".description");

let icon = document.querySelector(".icon");
let weatherInfo = document.querySelector(".weather-info");

button.addEventListener("click", function fetchData() {
  weatherInfo.style.display = "block";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=e087fcba83f587d247af969334e7ff29&units=metric`
  )
    .then(response => response.json())
    .then(data => {
      let FData = data["main"];
      let tempValue = data["main"]["temp"];
      let nameValue = data["name"];
      let descValue = data["weather"]["0"]["description"];
      let highTempValue = data["main"]["temp_max"];
      let lowTempValue = data["main"]["temp_min"];
      let feelsLikeValue = data["main"]["feels_like"];
      let humidityValue = data["main"]["humidity"];
      let windValue = data["wind"]["speed"];
      let visibilityValue = data["visibility"];
      let pressureValue = data["main"]["pressure"];
      let iconValue = data["weather"]["icon"];

      country.innerHTML = data['sys']['country'];
      city.innerHTML = nameValue;
      description.innerHTML = descValue;
      currentTemp.innerHTML = 'Current temperature: ' + tempValue  + "°C";
      highTemp.innerHTML = 'High: s' + highTempValue +"°C";
      lowTemp.innerHTML = 'Low: ' + lowTempValue + "°C";
      feelsLike.innerHTML = 'Feels like: ' + feelsLikeValue +  "°C";
      humidity.innerHTML = 'Humidity: ' + humidityValue + '%';
      windSpeed.innerHTML = 'Wind: ' + windValue + ' km/h';
      visibility.innerHTML = 'Visibility: ' + visibilityValue/1000 + ' km';
      pressure.innerHTML = 'Pressure' + pressureValue + ' hPa';
      icon.innerHTML.src = iconValue;

      input.value = "";
      // feelsLike.value = '';      
      

    });
});
