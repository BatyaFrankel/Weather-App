function search(city) {
  let apiKey = `57b366cc3c6f14127edbbo64a0t02b0a`;
  let unit = `metric`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=${unit}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayRefreash);
}

function cityInput(event) {
  event.preventDefault();
  let searchBox = document.querySelector("#input-city-input-box");
  let city = document.querySelector("#current-city");
  let currentCity = searchBox.value;
  search(currentCity);
}

function displayRefreash(responce) {
  console.log(responce);
  let currentTemperature = Math.round(responce.data.temperature.current);
  let temperatureDisplay = document.querySelector("#current-temperature");
  temperatureDisplay.innerHTML = currentTemperature;

  let currentCity = responce.data.city;
  let cityDisplay = document.querySelector("#current-city");
  cityDisplay.innerHTML = currentCity;
}

let formInput = document.querySelector("#input-city-form");
formInput.addEventListener("submit", cityInput);

search("London");
