//var openWeatherKey = "2d52ba18533dcbc34d4b78e05f50aa2c";

//Function to create elements based on API info
function showWeather(weather) {
var resultsCurrent = document.querySelector("#current-day");
//Current date
var currentDay = dayjs();
$('#current-day').text(currentDay.format('dddd MM/DD/YYYY'));
//Creating elements for the current day
var cityName = document.createElement("div");
var humidity = document.createElement("div");
var windSpeed = document.createElement("div");
var temperature = document.createElement("div");
//Setting attributes for styling to the new elements
cityName.setAttribute("class", "title");
temperature.setAttribute("class", "subtitle is-dark");
windSpeed.setAttribute("class", "subtitle is-dark");
humidity.setAttribute("class", "subtitle is-dark");
//Setting the text content based off of information given via API
cityName.textContent = weather.name;
temperature.textContent = "Temp: " + weather.main.temp + " °F";
windSpeed.textContent = "Wind: " + weather.wind.speed + " MPH";
humidity.textContent = "Humidity: " + weather.main.humidity + "%";
//Appending elements to the GUI
resultsCurrent.append(cityName);
resultsCurrent.append(temperature);
resultsCurrent.append(windSpeed);
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

//Selecting the Search button
//var submitSearch = document.querySelector("#submit");

//Getting items to store based on user input
//var userSearch = JSON.parse(localStorage.getItem("userSearch")) || [];

//userSearch = document.querySelector("#search");

//submitSearch.addEventListener("click", getWeather);

// submitSearch.addEventListener("click", function() {
//     userSearch.push(initialsEl.value + ": " + score);
// localStorage.setItem("userSearch", JSON.stringify(userSearch));
//     for (let i = 0; i < userSearch.length; i++) {
//         var li = document.createElement("li")
//         li.textContent = userSearch[i];
//         li.setAttribute("id", "recent");
//         document.querySelector("#recent").appendChild(li);
//         };