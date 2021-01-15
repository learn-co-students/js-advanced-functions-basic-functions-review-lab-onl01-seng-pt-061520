// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!` 
}

function  mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(str="*") {
    //Inner function()
    return function(phrase="special") {
        return `You are ${str}${phrase}${str}!`
    }

}

let Calculator = {
    add: function add(i, n) {
        return i + n
    },

    subtract: function subtract(i, n) {
        return i - n
    },

    multiply: function multiplu(i, n) {
        return i * n
    },

    divide: function(i, n) {
        return i / n
    }
}

function actionApplyer(starti, array) {
   array.forEach(fx => {
       starti = fx(starti)
   })
   return starti
}