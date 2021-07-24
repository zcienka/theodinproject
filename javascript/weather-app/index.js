// const img = document.querySelector('img');
const API_KEY = "a5fbe77f9cc630d2e546988104c04d85"
async function displayTodaysTemperature(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
    const weatherData = await response.json()
    let weather = weatherData.list[0].weather[0]["main"]
    let weatherDescription = weatherData.list[0].weather[0]["description"]
    let temperature = Math.round(weatherData.list[0].main.temp - 273.15)
    let icon = chooseWeatherIcon(weather, weatherDescription)
    let iconName = icon[0]
    let weatherIconId = icon[1]
    let weatherIcon = displayWeatherIcon(weatherIconId, iconName)

    document.getElementById('todays-temperature-icon').innerHTML = weatherIcon
    document.getElementById("todays-temperature").textContent = temperature.toString() + "°C"
    document.getElementById("city").textContent = weatherData.city.name
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\"img/${iconName}.jpg\")`
    let weekdays = document.getElementById("weekdays")
    weekdays.innerHTML = ""
    let j = 0, date, weekday

    for (let i = 0; i < 40; i += 8) {
        if (i !== 0) {
            weather = weatherData.list[i].weather[0]["main"]
            weatherDescription = weatherData.list[i].weather[0]["description"]
            temperature = Math.round(weatherData.list[i].main.temp - 273.15)
            date = new Date(weatherData.list[i]["dt_txt"].split(" ")[0])
            weekday = date.toLocaleString(window.navigator.language, {weekday: 'long'})
            let icon  = chooseWeatherIcon(weather, weatherDescription)
            let iconName = icon[0]
            let weatherIconId = icon[1]

            weekdays.innerHTML += `<div id="weekday${j}" class="weekday-container">
                                        <div>
                                            <p>${weekday}</p>
                                            ${displayWeatherIcon(weatherIconId, iconName)}
                                            <h2 id="monday-temperature">${temperature.toString() + "°C"}</h2>
                                        </div>
                                   </div>`
            j += 1
        }
    }
}
displayTodaysTemperature("London")
let searchBar = document.getElementById("search-bar")
searchBar.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        displayTodaysTemperature(searchBar.value)
    }
})

function displayDateAndWeekday() {
    let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false})
    document.getElementById("hour").textContent = time
    let date = new Date().toLocaleDateString([], {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
    document.getElementById("date").textContent = date
}

function displayWeatherIcon(weatherIconId, iconName) {
    if (weatherIconId !== "mist")
        return `<div style="text-align: center; display: inline-block"><i class="fas fa-${iconName} fa-2x" id="${weatherIconId}-icon"></i></div>`
    else
        return `<img src="${iconName}" alt="">`
}

function chooseWeatherIcon(weather, weatherDescription) {
    let weatherIconId
    let iconName
    if (weather === "Clouds") {
        if (weatherDescription === "few clouds") {
            weatherIconId = "few-clouds-icon"
            iconName = "cloud-sun"
        } else if (weatherDescription === "scattered clouds") {
            weatherIconId = "scattered-clouds"
            iconName = "cloud"
        } else if (weatherDescription === "broken clouds") {
            weatherIconId = "broken-clouds"
            iconName = "cloud"
        } else if (weatherDescription === "overcast clouds") {
            weatherIconId = "broken-clouds"
            iconName = "cloud"
        }
    } else if (weather === "Clear") {
        weatherIconId = "clear-sky"
        iconName = "sun"
    } else if (
        weather === "Mist" ||
        weather === "Smoke" ||
        weather === "Haze" ||
        weather === "Dust" ||
        weather === "Fog" ||
        weather === "Sand" ||
        weather === "Dust" ||
        weather === "Ash" ||
        weather === "Squall" ||
        weather === "Tornado") {
        weatherIconId = "mist"
        iconName = "img/mist-icon.png"
    } else if (weather === "Snow") {
        weatherIconId = "snow"
        iconName = "snowflake"
    } else if (weather === "Rain") {
        if (weatherDescription === "light rain" ||
            weatherDescription === "moderate rain" ||
            weatherDescription === "heavy intensity rain" ||
            weatherDescription === "very heavy rain" ||
            weatherDescription === "extreme rain") {
            weatherIconId = "clear-sky"
            iconName = "sun"
        } else if (weatherDescription === "freezing rain") {
            weatherIconId = "snow"
            iconName = "snowflake"
        } else if (weatherDescription === "light intensity shower rain" ||
            weatherDescription === "shower rain" ||
            weatherDescription === "heavy intensity shower rain" ||
            weatherDescription === "ragged shower rain") {
            weatherIconId = "shower-rain"
            iconName = "cloud-rain"
        }
    } else if (weather === "Drizzle") {
        weatherIconId = "shower-rain"
        iconName = "cloud-rain"
    } else if (weather === "Thunderstorm") {
        weatherIconId = "thunderstorm"
        iconName = "bolt"
    }
    return [iconName, weatherIconId]
}

displayDateAndWeekday()
setInterval(displayDateAndWeekday, 1000)