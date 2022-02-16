let systemsData

async function initSystems() {
    let getSystems, sysNames, defaultDropDown

    try{
        getSystems = await apiRequest(`http://127.0.0.1:8080/data.json`)
        systemsData = getSystems.systems
        defaultDropDown = document.querySelector('#system')
        for(let i = 0; i < systemsData.length; i++){
            if(systemsData[i].parentID === 0){
                sysNames = systemsData[i].sysName
                let option = document.createElement('option')
                option.textContent = sysNames
                option.id = sysNames
                defaultDropDown.appendChild(option)
            }
        }
        populateDD()    
    }
    catch(error){
        console.log(error)
    }
}


async function apiRequest(url) {
    return new Promise( (resolve, reject) => {
        axios.get(url)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}

window.onload = initSystems()

function populateDD(){
    let defaultDropDown = document.getElementById('system')
    let dropdownSelection = defaultDropDown.value
    let subSystemDropDown = document.getElementById('subSystem')

    while (subSystemDropDown.firstChild) {
        subSystemDropDown.firstChild.remove()
    }
    if(dropdownSelection === "Sales"){
        for (let i = 0; i < systemsData.length; i++){
            if(systemsData[i].parentID === 1){
                let sales = systemsData[i].sysName
                let option = document.createElement('option')
                option.textContent = sales
                subSystemDropDown.appendChild(option)
                console.log('Sales Online')
            }
        } 
    } else if(dropdownSelection === "Operations"){
        for (let i = 0; i < systemsData.length; i++){
            if(systemsData[i].parentID === 2){
                let operations = systemsData[i].sysName
                let option = document.createElement('option')
                option.textContent = operations
                subSystemDropDown.appendChild(option)
                console.log('Operations Online')
            } 
        }
    } else if(defaultDropDown.value === "Customer Support"){
        for (let i = 0; i < systemsData.length; i++){
            if(systemsData[i].parentID === 3){
                let customerSupport = systemsData[i].sysName
                let option = document.createElement('option')
                option.textContent = customerSupport
                subSystemDropDown.appendChild(option)
                console.log('Customer Support Online')
            }
        } 
    } else {
        console.log("fail")
    }
}




let systemChange = document.getElementById('system')
systemChange.addEventListener('change', populateDD)





// function sendInput (){
// }


//document.querySelector('#system').addEventListener('onchange',populateDD)