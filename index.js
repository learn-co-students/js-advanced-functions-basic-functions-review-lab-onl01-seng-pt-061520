function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(style="*"){
        return function(adjective="special"){
            return `You are ${style}${adjective}${style}!` // this is wrapping "special" in "*" which when printed to the screen highlights/bolds "special" for us.
        }
}
const Calculator = {
    add: function(a,b) {
        return a+b;
    },
    subtract: function(a,b) {
        return a-b;
    },
    multiply: function(a,b) {
        return a*b;
    },
    divide: function(a,b) {
        return a/b;
    },
}
function actionApplyer(start, functions) {
    for (let i = 0; i < functions.length; i++) {
        start = functions[i](start);
    }
    return start
}