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
$(dayEl).text(fiveDays.format('dddd MM/DD/YYYY'));

//Creating html for the API Data
var fiveDayIcon = document.createElement("img");
var fiveDayTemp = document.createElement("div");
var fiveDayHumidity = document.createElement("div");
var fiveDayWindSpeed = document.createElement("div");
//Setting the content based off the data list via the API
fiveDayIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + day.weather[0].icon + "@4x.png");
fiveDayTemp.textContent = "Temp: " + day.main.temp + " °F";
fiveDayWindSpeed.textContent = "Wind: " + day.wind.speed + " MPH";
fiveDayHumidity.textContent = "Humidity: " + day.main.humidity + "%";
//Adding elements to the GUI
dayEl.append(fiveDayIcon);
dayEl.append(fiveDayTemp);
dayEl.append(fiveDayWindSpeed);
dayEl.append(fiveDayHumidity);
}});
};

//Getting items to store based on user input
var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

submitSearch.addEventListener("click", function() {
    searchHistory.push(userSearch.value);
localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    for (let i = 0; i < searchHistory.length; i++) {
        var listEl = document.querySelector("#recent")
        //var listButton = document.createElement("button");
        var recentSearch = document.createElement("p");
        recentSearch.textContent = searchHistory[i];
        listEl.append(recentSearch/*, listButton*/);
        console.log(localStorage);
}});

/* ***************************************************************************** */
//todo make localstorage elements into buttons that are attached to the search function eventlistener
//todo dayjs isnt populating the following 5 days- only showing current date
// var dayOne = dayjs().add(1, "day").format('dddd MM/DD/YYYY');
// var dayTwo = dayjs().add(2, "day").format('dddd MM/DD/YYYY');
// var dayThree = dayjs().add(3, "day").format('dddd MM/DD/YYYY');
// var dayFour = dayjs().add(4, "day").format('dddd MM/DD/YYYY');
// var dayFive = dayjs().add(5, "day").format('dddd MM/DD/YYYY');
// $(fiveDays).text(dayOne.format('dddd MM/DD/YYYY'));
// $(fiveDays).text(dayTwo.format('dddd MM/DD/YYYY'));
// $(fiveDays).text(dayThree.format('dddd MM/DD/YYYY'));
// $(fiveDays).text(dayFour.format('dddd MM/DD/YYYY'));
// $(fiveDays).text(dayFive.format('dddd MM/DD/YYYY'));
// // dayjs().add(1, "day").format("MM-DD-YYYY");
// // dayjs().add(2, "day").format("MM-DD-YYYY");
// // dayjs().add(3, "day").format("MM-DD-YYYY");
// // dayjs().add(4, "day").format("MM-DD-YYYY");
// // dayjs().add(5, "day").format("MM-DD-YYYY");
// fiveDayOne.querySelector("#day1");
// fiveDayTwo.querySelector("#day2");
// fiveDayThree.querySelector("#day3");
// fiveDayFour.querySelector("#day4");
// fiveDayFive.querySelector("#day5");

//todo OR THIS???
//var fiveDays = document.querySelector(".dates");
// var dayOne = dayjs().add(1, "day").format('dddd MM/DD/YYYY');
// var dayTwo = dayjs().add(2, "day").format('dddd MM/DD/YYYY');
// var dayThree = dayjs().add(3, "day").format('dddd MM/DD/YYYY');
// var dayFour = dayjs().add(4, "day").format('dddd MM/DD/YYYY');
// var dayFive = dayjs().add(5, "day").format('dddd MM/DD/YYYY');
// //Creating elements for the five day forecast
// //This is for dayjs
// var fiveDayOne = document.createElement('div');
// var fiveDayTwo = document.createElement('div');
// var fiveDayThree = document.createElement('div');
// var fiveDayFour = document.createElement('div');
// var fiveDayFive = document.createElement('div');

// fiveDayOne.textContent = dayOne;
// fiveDayTwo.textContent = dayTwo;
// fiveDayThree.textContent = dayThree;
// fiveDayFour.textContent = dayFour;
// fiveDayFive.textContent = dayFive;
// fiveDays.append(fiveDayOne);
// fiveDays.append(fiveDayTwo);
// fiveDays.append(fiveDayThree);
// fiveDays.append(fiveDayFour);
// fiveDays.append(fiveDayFive);