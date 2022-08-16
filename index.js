
function saturdayFun(fun= 'roller-skate'){
    return `This Saturday, I want to ${fun}!`
}
saturdayFun();
saturdayFun('bathe my dog');

function mondayWork(work='go to the office'){
    return  `This Monday, I will ${work}.`
}
mondayWork();
mondayWork('work from home');

function wrapAdjective(wrap='*') {
    const result = function emphatic(adjective) {
      return `You are ${wrap}${adjective}${wrap}!`; 
    };
    return result; 
  }
  emphatic('a hard worker')