// Your code here

function saturdayFun(activity = "roller-skate") {
   return "This Saturday, I want to " + activity + "!"
}

// function expression evaluates to stored work 

let mondayWork = function(activity = "go to the office") {
   return "This Monday, I will " + activity + "."
}




let wrapAdjective = function(specialChar = "*"){
   return function(adjective) {
      return "You are " + specialChar + adjective + specialChar + "!" 
   }
}

let Calculator = {
   add: function(a,b) {
      return a + b 
   },
   subtract: function(a,b) {
      return a - b
   },
   multiply: function(a,b) {
      return a*b
   },
   divide: function(a, b) {
      return a/b
   }
}

//function actionApplyer(int, array) {
//   if (array = []) {
//      return int
//   }
//   else {
//      return (int * 2 + 1000) % 7 
//   }
//}

let actionApplyer = function(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}