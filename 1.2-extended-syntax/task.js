function getResult(a,b,c){
    "use strict";
    var D = Math.pow(b,2) - (4 * a * c);
    var x1 = (-b + Math.sqrt(D)) /(2 * a);
    var x2 = (-b - Math.sqrt(D)) /(2 * a);
    var x3 = -b / (2 * a);
      if (D < 0){
          return [ ];
      } else if (D > 0) {
          return [x1,x2]
      } else if  (D == 0){
          return [x3];
      }
     }
  
  
    // код для задачи №1 писать здесь
    // return x;


function getAverageMark(marks){
    var sum = 0;
    if (marks.length === 0) {
      return 0 ;
    }
    if (marks.length > 5 ){
       var marks = marks.slice(0, 5);
    }

     for (var i = 0; i < marks.length; i++){
          sum =sum + marks[i] ;
        }   
        var averageMark = sum/marks.length;
         return averageMark;
      }  
function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}