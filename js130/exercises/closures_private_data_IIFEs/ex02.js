/*
Our earlier implementation of the Function.prototype.bind was simplistic. 
Function.prototype.bind has another trick up its sleeve besides hard-binding functions to context objects. 
It's called partial function application. 
Read this assignment and the MDN documentation to learn more about partial function application.

Alter the myBind function written in the previous exercise to support partial function application of additional arguments to the original function.
*/


function prod(b, c) {
  return this.a * b + c;
}

let nums = {a: 2, b: 3};

function myBind(func, context, ...partialArgs) {
  return function(...extraArgs) {
    let args = partialArgs.concat(extraArgs);
    return func.apply(context, args);
  }
} 

let multiplyBy = myBind(prod, nums, 4);

console.log(multiplyBy(5)); // 13
