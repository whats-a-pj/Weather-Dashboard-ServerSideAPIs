//var openWeatherKey = "2d52ba18533dcbc34d4b78e05f50aa2c";

//Selecting the submit button for the event listener
var submitSearch = document.querySelector("#submit");

//Selecting the input for the user's search
var userSearch = document.querySelector("#search");

//Function to create elements based on API info
function showWeather(weather) {
var resultsCurrent = document.querySelector("#current-day");
console.log(weather);
//Current date
var currentDay = dayjs();
$('#current-day').text(currentDay.format('dddd MM/DD/YYYY'));

//Creating elements for the current day
var cityName = document.createElement("div");
var currentDayIcon = document.createElement("img");
var currentHumidity = document.createElement("div");
var currentWindSpeed = document.createElement("div");
var currentTemp = document.createElement("div");
//Setting attributes for styling to the new elements
cityName.setAttribute("class", "title");
currentDayIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + weather.weather[0].icon + "@4x.png");
currentTemp.setAttribute("class", "subtitle is-dark");
currentWindSpeed.setAttribute("class", "subtitle is-dark");
currentHumidity.setAttribute("class", "subtitle is-dark");
//Setting the text content based off of information given via API
cityName.textContent = weather.name;
currentTemp.textContent = "Temp: " + weather.main.temp + " °F";
currentWindSpeed.textContent = "Wind: " + weather.wind.speed + " MPH";
currentHumidity.textContent = "Humidity: " + weather.main.humidity + "%";
//Appending elements to the GUI
resultsCurrent.append(cityName);
resultsCurrent.append(currentDayIcon);
resultsCurrent.append(currentTemp);
resultsCurrent.append(currentWindSpeed);
resultsCurrent.append(currentHumidity);

};

function getWeather() {
    fiveDayForecast();
//grabbing the url so when the user puts in a city name it will concatenate results
var forecastURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userSearch.value + "&units=imperial&appid=2d52ba18533dcbc34d4b78e05f50aa2c";
//this is grabbing that data based on user input and running showWeather()
fetch(forecastURL)
.then((response) => response.json())
.then((data) => showWeather(data));
};

//Listens for the user to click the search button after typing in a value and then runs getWeather() 
submitSearch.addEventListener("click", getWeather);

function fiveDayForecast() {
    var test = "https://api.openweathermap.org/data/2.5/forecast?q=" + userSearch.value + "&units=imperial&appid=2d52ba18533dcbc34d4b78e05f50aa2c";
    fetch(test)
.then((response) => response.json())
.then((data) => {
//for loop that will run through the data 5 times for the other 5 days (not including the current days forecast)
// +8 because there are 40 objects in the data list
for (let i = 0; i < data.list.length; i = i + 8) {
    const day = data.list[i];
//Selecting the elements in the HTML with ids starting with #day and using the same math variables as the for loop above
var dayEl = document.querySelector("#day" + (i / 8 + 1));
var fiveDays = dayjs();
$('#day').text(fiveDays.format('dddd MM/DD/YYYY'));
//todo var dayJSVar = document.createElement("#current-day" + (i / 8 +1));
//Creating elements for the five day forecast
var fiveDayIcon = document.createElement("img");
var fiveDayTemp = document.createElement("div");
var fiveDayHumidity = document.createElement("div");
var fiveDayWindSpeed = document.createElement("div");
//Setting the content based off the data list
fiveDayIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + day.weather[0].icon + "@4x.png");
fiveDayTemp.textContent = "Temp: " + day.main.temp + " °F";
fiveDayWindSpeed.textContent = "Wind: " + day.wind.speed + " MPH";
fiveDayHumidity.textContent = "Humidity: " + day.main.humidity + "%";
//Adding elements to the GUI
dayEl.append(fiveDayIcon);
dayEl.append(fiveDayTemp);
dayEl.append(fiveDayWindSpeed);
dayEl.append(fiveDayHumidity);
}
});
};

//Getting items to store based on user input
var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

submitSearch.addEventListener("click", function() {
    searchHistory.push(userSearch.value);
localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
//instead of setting ids here maybe do an innerHTML thing or just hard code in the html with empty space
//to help it not duplicate the search history
    for (let i = 0; i < searchHistory.length; i++) {
        var li = document.createElement("li")
        li.textContent = searchHistory[i];
        li.setAttribute("id", "#recent");
        document.querySelector("#recent").appendChild(li);
}});



//todo Here is a bunch of code I may or may not need or references to already written code
/* 
1. create a for loop inside showWeather function to loop through the data for 6 days;
the current day and the 5 days following, can i use dayjs to loop through this or 
does the API call do all of that? docs are a little unclear
2. create another for loop for userSearch localStorage to save data + create clickable
list elements based on userSearch
3. figure out how the geocoding API works, because for some reason replacing London with 
another city name doesn't create a response
*/

//Assigning variables to already created elements
// var dayOne = document.getElementById("#day1");
// var dayTwo = document.getElementById("#day2");
// var dayThree = document.getElementById("#day3");
// var dayFour = document.getElementById("#day4");
// var dayFive = document.getElementById("#day5");

//Selecting the Search button
//var submitSearch = document.querySelector("#submit");