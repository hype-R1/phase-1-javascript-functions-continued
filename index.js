function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(bob="go to the office") {
    return `This Monday, I will ${bob}.`
}

let wrapAdjective = function(looks="*"){
return function(thing="special") {
    return `You are ${looks}${thing}${looks}!`
  }
}