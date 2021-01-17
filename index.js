function saturdayFun(arg = "roller-skate") {
    return `This Saturday, I want to ${arg}!`
}
  
function mondayWork(arg = "go to the office") {
    return `This Monday, I will ${arg}.`
}
  
function wrapAdjective(flair = "*") {
    return function(param = "special") {
      return `You are ${flair}${param}${flair}!`
    }
}
const Calculator = {
    add :function (num1, num2) {
      return num1 + num2
    },
    subtract :function (num1, num2) {
      return num1 - num2
    },
    multiply :function (num1, num2) {
      return num1 * num2
    },
    divide :function (num1, num2) {
      return num1 / num2
    }
}
  
function actionApplyer(start, arr) {
    let star = start
  
    for(let i = 0; i < arr.length; i++) {
      star = arr[i](star)
    }
  
    return star
} 