// declare each of the variables marked with "**" in the appropriate scope and using the appropriate type

// create an event listener that calls the curveGrade() function when the Curve It!! button is clicked

// create an event listener that resets the scores and grades to their defaults when the Reset button is clicked

function applyBell(grade, index, ary) {
    switch (true) {
        case grade >= (mean + (gradeSlice * 2)): 
            ary[index] = 'A'
            break
        case grade >= (mean + gradeSlice): 
            ary[index] = 'B'
            break
        case grade >= (mean):
            ary[index] = 'C'
            break
        case grade >= (mean - gradeSlice): 
            ary[index] = 'D'
            break
        default:
            ary[index] = 'F'
            break
    }
}

function convertArray(obj) {
    ary = obj.value.split(',')
    ary = ary.map(function (x) {
        return parseInt(x)
    })
    return ary
}

// Condense the number of lines within the curveGrade() function as much as possible by converting 
// the functions to arrow functions. You can also condense the number of lines by combining some 
// separate lines of code into single lines. It currently has 18 lines of code. Without counting  
// empty lines, can you get the number of lines down to 8?

function curveGrades() {
    // var sum = (accumulator, currentValue) => accumulator + currentValue

    // function sumGrades(array) {
    //     return array.reduce(sum)
    // }

    // var aryGrades = convertArray(document.querySelector('#scores'))

    // var minGrade = aryGrades.reduce(function(a, b) {
    //     return Math.min(a, b)
    // })
    
    // var maxGrade = aryGrades.reduce(function(a, b) {
    //     return Math.max(a, b)
    // })
    
    // var mean = sumGrades(aryGrades) / aryGrades.length

    // var range = maxGrade - minGrade

    // var gradeSlice = range / 5

    // aryGrades.forEach(applyBell)

    var gradeHTML = document.createElement("h4");
    gradeHTML.setAttribute("id", "gradeHTML")
    gradeHTML.textContent = "Test";
    document.getElementById("grades").appendChild(gradeHTML);
 
    // write the value of aryGrades to the grades div in the HTML document
}

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", curveGrades)


//Reset Button

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reset)

function reset (){
    let resetHTML = document.getElementById("gradeHTML");
    resetHTML.remove();
}



