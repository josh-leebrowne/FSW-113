// This script should return the results of a function that use data from the api to determine whether it 
// is daylight in the specified city. It should return "blue" if daylight, and "black" if night time.



export default function outputColor (weatherData) {
    let currentTimeData = weatherData.dt
    let sunriseData = weatherData.sys.sunrise
    let sunsetData = weatherData.sys.sunset
    let container = document.getElementById('container')
    
    if(currentTimeData >= sunriseData && currentTimeData <= sunsetData){
        container.style.backgroundColor = "blue"
    } else{
        container.style.backgroundColor = "black"
    }   
}







