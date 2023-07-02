const API_KEY = "4269652c5e1b6a66a34f9d3d16ecc098";
const DEFAULT_VALUE = "--";
const searchInput = document.getElementById("search-input");
const cityName = document.querySelector(".info-wrapper .city-name");
const weatherState = document.querySelector(".info-wrapper .weather-state");
const weatherIcon = document.querySelector(".info-wrapper .weather-icon");
const temperature = document.querySelector(".temperature");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");

searchInput.addEventListener("change", (event) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=vi&units=metric`
    )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            cityName.innerHTML =
                data.cod == "200" ? data.name : "City not found";
            weatherState.innerHTML =
                data.cod == "200" ? data.weather[0].description : DEFAULT_VALUE;
            weatherIcon.src =
                data.cod == "200"
                    ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                    : `https://openweathermap.org/img/wn/01d@2x.png`;
        })
        .catch((err) => {
            console.log(err);
        });
});
