var openWeatherKey = "2d52ba18533dcbc34d4b78e05f50aa2c";

function showWeather(weather) {
var resultsCurrent = document.querySelector("#current-day");
//Creating elements to show the current weather
//Current date
var currentDay = dayjs();
$('#current-day').text(currentDay.format('dddd MM/DD/YYYY'));
//Name of city via search
var cityName = document.createElement("h2");
cityName.textContent = weather.name;
resultsCurrent.append(cityName);
//Current temperature of said city
var temperature = document.createElement("p");
temperature.textContent = "Temp: " + weather.main.temp + " °F";
resultsCurrent.append(temperature);
//Current wind speed of said city
var windSpeed = document.createElement("p");
windSpeed.textContent = "Wind: " + weather.wind.speed + " MPH";
resultsCurrent.append(windSpeed);
//Current humidity of said city
var humidity = document.createElement("p");
humidity.textContent = "Humidity: " + weather.main.humidity + "%";
resultsCurrent.append(humidity);
};

function getWeather(query) {
var test = "https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=2d52ba18533dcbc34d4b78e05f50aa2c";
//var test = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=imperial&appid=2d52ba18533dcbc34d4b78e05f50aa2c";
//add a variable for query so user can input a city name
//add eventlistener to search button to run the show weather and get weather funcs
fetch(test)
.then((response) => response.json())
.then((data) => showWeather(data));
};

getWeather();