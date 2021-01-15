// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork()

function wrapAdjective(string="*"){
    return function(param="special"){
        return `You are ${string}${param}${string}!`
    }
}

const Calculator = {
    add(num1, num2){
        return num1 + num2
    },
    subtract(num1, num2){
        return num1 - num2
    },
    multiply(num1, num2){
        return num1 * num2
    },
    divide(num1, num2){
        return num1 / num2
    }
}

function actionApplyer(num1, array) {
    let result = num1

    for(let i = 0; i < array.length; i++){
        result = array[i](result)
    }
    return result
}