document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

function getWeather() {
    const location = document.getElementById('location').value;
    const apiKey = '6708e7bd48ae4d1b8e93d69b8607d98f'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                document.getElementById('weatherInfo').innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherInfo').innerHTML = `<p>Failed to fetch weather data. Please try again.</p>`;
        });
}

function displayWeather(data) {
    const weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
    document.getElementById('weatherInfo').innerHTML = weatherInfo;
}
