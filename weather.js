
const API_KEY = "cedfa55893f811fdd99d9e5def750c76";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        cityContainer.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("I can't find you!. cause we have NO WEATHER for you. ");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);