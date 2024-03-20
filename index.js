// code your solution here
function saturdayFun(item = 'roller-skate'){
    return `This Saturday, I want to ${item}!`
}
saturdayFun()
const mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
mondayWork("work from home")

function wrapAdjective(flair ="*") {
    return function (parInner = "special") {
      return `You are ${flair}${parInner}${flair}!`;
    };
  }
  wrapAdjective("%")("a dedicated programmer");


