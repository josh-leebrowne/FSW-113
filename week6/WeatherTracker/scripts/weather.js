// import the convertTemp.js and getDaylight.js scripts with their default export

// declare any variables needed

// create an event listener for the click of the goBttn that calls a function to fetch the weather data

// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        

// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data

// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city

import outputColor from './getDayight.js'
import convertTemp from './convertTemp.js'

//GeoCode Lat-Long --> Weather API
async function initGeoCode(cityName, stateName, countryName){
    let geoCode, weatherData, lat, lon
    
    try{
        geoCode = await apiRequest(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateName},${countryName}&limit=5&appid=77b7879a0d17c8e649568640e60f40ab`)
        lat = geoCode[0].lat
        lon = geoCode[0].lon
        weatherData = await apiRequest(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=77b7879a0d17c8e649568640e60f40ab`)
        outputColor(weatherData)
        let convertedTemp = convertTemp(weatherData)
        displayData(weatherData, convertedTemp)
    }
    catch(error){
        console.log(error)
    }
}

//Axios Request
async function apiRequest(url) {
    return new Promise( (resolve, reject) => {
        axios.get(url)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}

initGeoCode(); 

//Get Value of Input Box
function sendData(){
    let textInputStr = document.getElementById("city").value
    let textInputValue = textInputStr.split(",")
    let cityName = textInputValue[0]
    let stateName = textInputValue[1]
    let countryName = textInputValue[2]
    initGeoCode(cityName, stateName, countryName)
}

const goBttn = document.getElementById('goBttn')
goBttn.addEventListener('click', sendData)

//Append To HTML

function displayData(weatherData,convertedTemp){
    let temp = Math.round(convertedTemp)
    let humidity = weatherData.main.humidity
    let descr = weatherData.weather[0].description

    const displayTemp = document.getElementById("tempData")
    displayTemp.textContent = `${temp}F`

    const displayHumidity = document.getElementById("humidData")
    displayHumidity.textContent = `${humidity}%`

    const displayDescr = document.getElementById("conditionsData")
    displayDescr.textContent = descr.toUpperCase()
}







