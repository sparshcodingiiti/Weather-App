// script.js
async function fetchWeatherData(city) {
    CityName.innerHTML = city
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b94dd5e12amsh821019d7cca030dp1664a3jsn162a9d701ea2',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = JSON.parse(await response.text());
        console.log(result);
        Cloud_pct.innerHTML = result.cloud_pct;
        Temp.innerHTML = result.temp;
        Feels_like.innerHTML = result.feels_like;
        Humidity.innerHTML = result.humidity;
        Min_temp.innerHTML = result.min_temp;
        Max_temp.innerHTML = result.max_temp;
        Wind_speed.innerHTML = result.wind_speed;
        Wind_degRees.innerHTML = result.wind_degrees;
        Sunrise.innerHTML = result.sunrise;
        Sunset.innerHTML = result.sunset;
        Humidity2.innerHTML = result.humidity;
        Temp2.innerHTML = result.temp;
        Wind_speed2.innerHTML = result.wind_speed;
    } catch (error) {
        console.error(error);
    }
}
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    fetchWeatherData(city.value);
});

fetchWeatherData("Delhi")