// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number


class Bug {
    constructor(...data) {
        this.all = data
        this.reportedBy = data[0],
        this.system = data[1],
        this.subSystem = data[2],
        this.bugDesc = data[3],
        this.isResolved = false
        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc
    }

    deleteBug(randomID) {
        let bugBox = document.getElementById(randomID)
        bugBox.remove()
    }

    resolveBug(randomID) {
        let bugBox = document.getElementById(randomID)
        this.isResolved = !this.isResolved
        if(this.isResolved === true){
            bugBox.style.background = "green"
        } else {
            bugBox.style.background = "red"
        }
    }
    
    addBug() {
        let container = document.getElementById('listWrapper')
        let bugBox = document.createElement('div')
        bugBox.classList.add('appendDiv')
        bugBox.style.background = "red"
        let randomID = Math.floor(Math.random()*1000)
        bugBox.setAttribute('id', randomID)

        let nameDiv = document.createElement('h3')
        nameDiv.textContent = `Name: ${this.reportedBy}`

        let systemDiv = document.createElement('h4')
        systemDiv.textContent = `System: ${this.system} | Subsystem: ${this.subSystem}`

        let descriptionDiv = document.createElement('h5')
        descriptionDiv.textContent = `Description: ${this.bugDesc}`

        let deleteButton = document.createElement('button')
        deleteButton.textContent = "Delete"
        deleteButton.addEventListener('click',() => this.deleteBug(randomID))

        let resolveButton = document.createElement('button')
        resolveButton.textContent = "Resolve"
        resolveButton.addEventListener('click',() => this.resolveBug(randomID))

        bugBox.appendChild(nameDiv)
        bugBox.appendChild(systemDiv)
        bugBox.appendChild(descriptionDiv)
        bugBox.appendChild(deleteButton)
        bugBox.appendChild(resolveButton)
        container.appendChild(bugBox)
    }
}


function reportBug(){
    let reportedByValue = document.getElementById('reportedBy').value
    let systemValue = document.getElementById('system').value
    let subSystemValue = document.getElementById('subSystem').value
    let bugDescValue = document.getElementById('bugDesc').value

    let bug = new Bug(
        reportedByValue,
        systemValue,
        subSystemValue,
        bugDescValue
    )
    bug.addBug()
}
let button = document.getElementById('submitBtn').addEventListener('click', reportBug)




