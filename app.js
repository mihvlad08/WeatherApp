// let apiKey = ['e087fcba83f587d247af969334e7ff29']
// Form variables
let button = document.querySelector('.removeForm')
let input = document.querySelector('.input-text')
// Fetched data variables
let currentTemp = document.querySelector('.currentTemp');
let highTemp = document.querySelector('.highTemp')
let lowTemp = document.querySelector('.lowTemp')

let feelsLike = document.querySelector('.feelsLike')
let humidity = document.querySelector('.humidity')
let windSpeed = document.querySelector('.windSpeed')

let dewPt = document.querySelector('.dewPt')
let visibility = document.querySelector('.visibility')
let pressure = document.querySelector('.pressure')

let city = document.querySelector('.city')
let description = document.querySelector('.description')

let icon = document.querySelector('.icon')

// document.querySelector('.weather-info').style.display = "initial"
button.addEventListener('click', function fetchData(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=e087fcba83f587d247af969334e7ff29&units=metric`)
    .then(response => response.json())
    .then(data => {
        let FData = data['main']
        let tempValue = data['main']['temp'];
        let nameValue = data['name'];
        let descValue = data['weather']['0']['description'];
        let highTempValue = data['main']['temp_max']
        let lowTempValue = data['main']['temp_min']
        let feelsLikeValue = data['main']['feels_like']
        let humidityValue = data['main']['humidity']
        let windValue = data['wind']['speed']
        let visibilityValue = data['visibility']
        let pressureValue = data['main']['pressure']
        let iconValue = data['weather']['icon']

        city.innerHTML = nameValue;
        description.innerHTML +=descValue;
        currentTemp.innerHTML +=tempValue + "°C";
        highTemp.innerHTML +=highTempValue + "°C";
        lowTemp.innerHTML +=lowTempValue + "°C";
        feelsLike.innerHTML +=feelsLikeValue + "°C";
        humidity.innerHTML+=humidityValue;
        windSpeed.innerHTML+=windValue;
        visibility.innerHTML+=visibilityValue;
        pressure.innerHTML+=pressureValue;
        icon.innerHTML.src+=iconValue;

        input.value ="";
        
    })
    
});

// Code below works


fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cluj&appid=e087fcba83f587d247af969334e7ff29`)
    .then(response => response.json())
    .then(data => console.log(data))