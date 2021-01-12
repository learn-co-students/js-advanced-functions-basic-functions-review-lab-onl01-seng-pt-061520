// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
// saturdayFun()

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function (par="special") {
        return `You are ${flair}${par}${flair}!`
    }
}

let Calculator = {
    add: function() {
        return 1+3
    },
    subtract: function() {
        return 1-3
    },
    multiply: function () {
        return 1 * 3
    },
    divide: function() {
        return 10 / 5
    }

}

function actionApplyer(integer, array=[]) {
    
    let x = integer
    array.forEach(fn => x = fn(x))
    return x
    
}