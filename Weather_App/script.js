const apiKey = "f2494ebfdf6cfab6ee93c7a87dc0244c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeatherData(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } 
  else {
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/cloudy.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear-sky.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Thunderstorm") {
      weatherIcon.src = "images/light.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Smoke") {
      weatherIcon.src = "images/dust.png";
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src = "images/haze.png";
    } else if (data.weather[0].main == "Dust") {
      weatherIcon.src = "images/dust.png";
    } else if (data.weather[0].main == "Fog") {
      weatherIcon.src = "images/fog.png";
    } else if (data.weather[0].main == "Sand") {
      weatherIcon.src = "images/sand-strom.png";
    } else if (data.weather[0].main == "Ash") {
      weatherIcon.src = "images/ash.png";
    } else if (data.weather[0].main == "Squall") {
      weatherIcon.src = "images/cyclone.png";
    } else if (data.weather[0].main == "Tornado") {
      weatherIcon.src = "images/tornado.png";
    } else {
      weatherIcon.src = "images/clear-sky.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchButton.addEventListener("click", () => {
  const city = searchInput.value;
  getWeatherData(city);
});

function checkwather(event) {
  if (event.key === "Enter") {
    const city = searchInput.value;
    getWeatherData(city);
  }
}
