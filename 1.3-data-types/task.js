"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    const parsed = parseInt(percent,contribution,amount);
    if (isNaN(parsed)) {
        return "Введите числовое значение!";
    }
    let S = amount - contribution;
    let n = 0;
    let now = new Date ();
    let nowMonth = now.getMonth();
    let creditMonth = date.getMonth();
    let nowYear = now.getYear();
    let creditYear = date.getYear();
    if (creditYear === 120) {
        n = creditMonth - nowMonth;
    }
        else { n = (creditYear - nowYear)* 12 + (creditMonth - nowMonth);
        }
    let P = 1/12 * (percent / 100); 
    let paiment = S * (P + P / (Math.pow((1+P),n)- 1));
    let totalAmount = paiment * n;
    console.log (totalAmount.toFixed(2));
    return (totalAmount.toFixed(2));
  }

function getGreeting(name) {
    let namegreeting = name;
    if (namegreeting == ""){
         namegreeting = 'Аноним';
           console.log(`Привет, меня зовут ${namegreeting}`);
    } 
    else { 
    console.log(`Привет, меня зовут ${namegreeting}`);
    }
    let greeting = (`Привет, меня зовут ${namegreeting}`);
      return greeting;
    }
    