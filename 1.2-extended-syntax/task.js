"use strict";
function getResult(a,b,c){
    let D = Math.pow(b,2) - (4 * a * c);
    let x = [];
        if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) /(2 * a);
        let x2 = (-b - Math.sqrt(D)) /(2 * a);
        x.push(x1,x2);
          return x;
      } else if  (D == 0){
        let x3 = -b / (2 * a);
        x.push(x3);
          return x;
      }
      else 
      return x;
     }
  
  
    // код для задачи №1 писать здесь
    // return x;


function getAverageMark(marks){
    let sum = 0;
    if (marks.length === 0) {
      return 0 ;
    }
    if (marks.length > 5 ){
       let marks = marks.slice(0, 5);
    }

     for (let i = 0; i < marks.length; i++){
          sum =sum + marks[i] ;
        }   
        return sum/marks.length;
      }  
function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}