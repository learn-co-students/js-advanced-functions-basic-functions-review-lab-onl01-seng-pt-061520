function saturdayFun(act="roller-skate") {
    return `This Saturday, I want to ${act}!`
}

function mondayWork(act="go to the office") {
    return `This Monday, I will ${act}.`
}

function wrapAdjective(flair="*") {
    return function outputString(adj="special") {
        return `You are ${flair}${adj}${flair}!`
    }
}

const Calculator = {
    add: function(num1, num2) {return num1+num2},
    subtract: function(num1, num2) {return num1-num2},
    multiply: function(num1, num2) {return num1*num2},
    divide: function(num1, num2) {return num1/num2}
}

function actionApplyer(int, arr) {
    if(!arr.length == true) {
        return int
    } else {
        let n = int
        for (let i = 0; i < arr.length; i++ ){
          n = arr[i](n)
        }
        return n
    }
}