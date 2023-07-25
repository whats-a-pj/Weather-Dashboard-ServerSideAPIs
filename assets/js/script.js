//var openWeatherKey = "2d52ba18533dcbc34d4b78e05f50aa2c";

//Function to create elements based on API info
function showWeather(weather) {
var resultsCurrent = document.querySelector("#current-day");
//Current date
var currentDay = dayjs();
$('#current-day').text(currentDay.format('dddd MM/DD/YYYY'));
//Creating elements for the current day
var cityName = document.createElement("div");
//var icon = document.createElement("span");
var currentHumidity = document.createElement("div");
var currentWindSpeed = document.createElement("div");
var currentTemp = document.createElement("div");
//Assigning variables to already created elements
// var dayOne = document.getElementById("#day1");
// var dayTwo = document.getElementById("#day2");
// var dayThree = document.getElementById("#day3");
// var dayFour = document.getElementById("#day4");
// var dayFive = document.getElementById("#day5");
//Setting attributes for styling to the new elements
cityName.setAttribute("class", "title");
//icon.setAttribute("class", "icon is-large");
currentTemp.setAttribute("class", "subtitle is-dark");
currentWindSpeed.setAttribute("class", "subtitle is-dark");
currentHumidity.setAttribute("class", "subtitle is-dark");
//Setting the text content based off of information given via API
cityName.textContent = weather.name;
//icon = weather.weather[0].icon;
currentTemp.textContent = "Temp: " + weather.main.temp + " °F";
currentWindSpeed.textContent = "Wind: " + weather.wind.speed + " MPH";
currentHumidity.textContent = "Humidity: " + weather.main.humidity + "%";
//Appending elements to the GUI
resultsCurrent.append(cityName);
//resultsCurrent.append(icon);
resultsCurrent.append(currentTemp);
resultsCurrent.append(currentWindSpeed);
resultsCurrent.append(currentHumidity);

for (let i = 0; i < currentDay.length; i++) {
    const fiveDayForecast = array[i];

    
    }
};

function getWeather(userSearch) {
var test = "https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=2d52ba18533dcbc34d4b78e05f50aa2c";
//var test = "https://api.openweathermap.org/data/2.5/weather?q=" + userSearch + "&units=imperial&appid=2d52ba18533dcbc34d4b78e05f50aa2c";
//add a variable for query so user can input a city name
//add eventlistener to search button to run the show weather and get weather funcs
fetch(test)
.then((response) => response.json())
.then((data) => showWeather(data));
};

getWeather();

//todo Here is what I *think* i need to do, and possibly how i can do it!
/* 
1. create a for loop inside showWeather function to loop through the data for 6 days;
the current day and the 5 days following, can i use dayjs to loop through this or 
does the API call do all of that? docs are a little unclear
2. create another for loop for userSearch localStorage to save data + create clickable
list elements based on userSearch
3. figure out how the geocoding API works, because for some reason replacing London with 
another city name doesn't create a response
*/


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