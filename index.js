// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work= "go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair="*"){
    return function(word= "special"){
        return `You are ${flair}${word}${flair}!`
    }
}

const Calculator = {
    add: function(a,b){
        return a + b
    },
    subtract: function(a,b){
        return a - b 
    },
    multiply: function(a,b){
        return a * b 
    },
    divide: function(a,b){
        return a / b 
    },
}

function actionApplyer(start,array){
    let a = start 

    for(let i = 0; i < array.length; i++){
        a = array[i](a)
    }
    return a
}