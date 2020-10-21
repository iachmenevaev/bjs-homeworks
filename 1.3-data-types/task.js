"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    // const parsed = parseInt(percent,contribution,amount);
    // if (isNaN(parsed)) {
    //   return parsed * 100;
    if (typeof(percent) === 'undefined' && typeof(contribution) === 'undefined' && 
    typeof(amount) === 'unefined' ){
      return "Введите числовое значение!";
    }
    else if(percent === null && contribution === null && amount === null)
    {
      return "Введите числовое значение!";
    }
    else if (isNaN(percent) && isNaN(contribution) && isNaN(amount)){
      return "Введите числовое значение!";
    }
    let S = amount - contribution;
    let n = 0;
    let now = new Date ();
    let nowMonth = now.getMonth();
    let creditMonth = date.getMonth();
    let nowYear = now.getFullYear();
    let creditYear = date.getFullYear();
    if (creditYear === 120) {
        n = creditMonth - nowMonth;
    }
        else { n = (creditYear - nowYear)* 12 + (creditMonth - nowMonth);
        }
    let P = 1/12 * (percent / 100); 
    let paiment = S * (P + P / (Math.pow((1+P),n)- 1));
    let PretotalAmount = paiment * n;
    let totalAmount = Number(PretotalAmount.toFixed(2));
    console.log (totalAmount);
    return (totalAmount);
  }

function getGreeting(name) {
    let namegreeting = name;
    if (namegreeting === "" || namegreeting === null || typeof(namegreeting) === 'undefined'){
         namegreeting = 'Аноним';
        }
    let greeting = (`Привет, мир! Меня зовут ${namegreeting}.`);
    return greeting;
   }
    