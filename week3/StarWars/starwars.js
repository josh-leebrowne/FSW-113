// declare any necessary variables

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'

function getFromSWAPI(queryType, itemID) {
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    })
    .then((data) => {
            updateInfo(data);
        })
    .catch(function(err) {
        console.warn(err)
    })
}

function fetchData(){
    var queryType = document.getElementById('queryType').value
    var itemID = document.getElementById('itemID').value
    getFromSWAPI(queryType, itemID);
}


//getFromSWAPI();

///
const updateInfo = (data) =>{
        console.log(data);
        let labelOne = document.getElementById("dataLabel1")
        let dataValueOne = document.getElementById("dataValue1")
        let labelTwo = document.getElementById("dataLabel2")
        let dataValueTwo = document.getElementById("dataValue2")
        labelOne.textContent = `Name: `
        dataValueOne.textContent = data.name
        labelTwo.textContent = `First appeared in: `
        dataValueTwo.textContent = data.films[0];
}



// let selectedMonth = document.getElementById('dropdown').value
// var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// let monthIndex = monthNames.indexOf(selectedMonth) + 1;

// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.