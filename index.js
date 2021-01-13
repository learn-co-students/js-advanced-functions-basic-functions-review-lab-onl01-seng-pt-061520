// Your code here

//Define a Function Using Function Declaration
function saturdayFun(x='roller-skate'){
    return `This Saturday, I want to ${x}!`
}

//Define a Function Using a Function Expression

let mondayWork= function(x='go to the office'){
    return `This Monday, I will ${x}.`
}

//Define the Term "Scope Chain"
    /*-Return a function
    -This "inner" function should:
take a single parameter that should default to "special". 
    -Return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair*/
function wrapAdjective(x="*") {
    return function(y="special") {
      return `You are ${x }${y}${x}!`;
    }
  }

const Calculator = {
    add: function(a,b){
        return a+b
    },
    subtract: function(a,b){
        return a-b
    },
    multiply: function(a,b){
        return a*b
    },
    divide: function(a,b){
        return a/b
    }
}

function actionApplyer(integer,array){
    for(let i=0; i<array.length; i++){
        integer=array[i](integer);
    }
    return integer;
}