// Your code here
const Calculator = {
    add :function (number1, number2) {return number1 + number2},
    subtract :function (number1, number2) {return number1 - number2 },
    multiply :function (number1, number2) {return number1 * number2},
    divide :function (number1, number2) { return number1 / number2}
  }

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

mondayWork = function (activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    //let part1 = 'hi'
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
  }

  function actionApplyer(startingNumber, functionArray){
      let start = startingNumber
    for(let i = 0; i < functionArray.length; i++) {
        start = functionArray[i](start)
      }
      return start
  }
 

