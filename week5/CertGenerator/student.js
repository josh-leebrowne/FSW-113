// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)

class objStudent {
    constructor(...data){
    this.nameValue = data[0],
    this.classValue = data[1],
    this.studentInts = data[2],
    this.possibleInts = data[3]
    }
    sumStudentScores(){
        let totalGrade = this.studentsInts.reduce((currentTotal, score) => {
                return score + currentTotal
            }, 0)
            console.log(allScores)
        return totalGrade
    }
    
    sumPossibleScores(){
        let totalGrade = this.possibleInts.reduce((currentTotal, student) => {
                return student.score + currentTotal
            }, 
        0)
        return totalGrade
    }

    printScores(){
        this.sumStudentScores();
        let scorePrint = document.getElementById("certGrade")
        scorePrint.textContent = totalGrade
        console.log(totalGrade);
    }
}

//----------------------------------------------------------------------


function setStudent() {
    let nameValue = document.getElementById("studentName").value
    
    let classValue = document.getElementById("className").value

    let studentScoreInput = document.getElementById("studentScores").value
    let studentScoreValue = studentScoreInput.split(",")

    let possibleScoreInput = document.getElementById("possibleScores").value
    let possibleScoreValue = possibleScoreInput.split(",")

    let studentInts = studentScoreValue.map((item) => {
        return parseInt(item) 
    })

    let possibleInts = possibleScoreValue.map((item) => {
        return parseInt(item)
    })

    let studentObject = new objStudent(
        nameValue,
        classValue,
        studentInts,
        possibleInts
    )

    printCertificate(studentObject);
}

//----------------------------------------------------------------------


document.querySelector("#print").addEventListener("click", setStudent)


function printCertificate(studentObject) {
    document.querySelector("#certGrade").innerHTML = studentObject.sumStudentScores()
}











// function test(){
//     let studentScoreInput = document.getElementById("studentScores");
//     let studentScoreValue = parseInt(studentScoreInput.value)


    // var studentAry = [
    //     {name: "Bob", score: studentScoreValue}
    // ]

    // const totalGrade = studentAry.reduce(function(currentTotal, student){
    //     return student.score + currentTotal
    // }, 0);

    // console.log(totalGrade)
// }

// const button = document.getElementById("print");
// button.addEventListener('click', test);















