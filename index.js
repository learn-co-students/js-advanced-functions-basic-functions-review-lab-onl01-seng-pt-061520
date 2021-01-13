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

  //defines an object called Calculator
const Calculator = {
    //that has a function called add
    add: function(a,b){
        return a+b
    },
    //that has a function called subtract
    subtract: function(a,b){
        return a-b
    },
    //that has a function called multiply
    multiply: function(a,b){
        return a*b
    },
    //that has a function called divide
    divide: function(a,b){
        return a/b
    }
}

//Defines a function called actionApplyer
//receives two arguments: a starting integer and an array of functions
//returns the given starting point, unchanged, when the array is empty
// Given 13, returns 4 after being acted on by several functions
function actionApplyer(integer,array){
    for(let i=0; i<array.length; i++){
        integer=array[i](integer);
    }
    return integer;
}