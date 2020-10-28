"use strict";

function getSolutions( a, b, c ) {
    let roots = []; 
    let D = Math.pow(b,2) - (4 * a * c);
    let results = {
        D , roots
    }
if (D < 0) {
    return results;
} else if (D == 0){
    let x3 = -b / (2 * a);
    roots.push(x3);
    return results;
}else if (D > 0){
    let x1 = (-b + Math.sqrt(D)) /(2 * a);
    let x2 = (-b - Math.sqrt(D)) /(2 * a);
    roots.push(x1);
    roots.push(x2);
    return results;
}
}
function showSolutionsMessage(a, b, c){
    let result = getSolutions(a, b, c);
    const s1 = '\u00B2';
    const s2 ='\u2081';
    const s3 = '\u2083';
    console.log (`Вычисляем корни квадратного уравнения ${a}x${s1}+${b}x+${c}`);
    console.log ( 'Значение дискриминанта: ' + result.D);
    if ( result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.D === 0){
        console.log('Уравнение имеет один корень X'+ s2 + '=' + result.roots);
    }else if (result.D > 0) {
        console.log ('Уравнение имеет два корня X' + s2 +'=' + result.roots[0] + ", x" + s3 + '='+ result.roots[1]);
    }
    }
    

    //
    //задача 2
    
    
    function getAverageMark(marks) {
        let sum = 0;
       if (marks.length === 0) {
       return 0 ;
       }
       for (let i = 0; i < marks.length; i++){
        sum =sum + marks[i] ;
       }   
            let aver = sum/marks.length;
       return aver;
                } 
            
  function getAverageScore(data){
          let tobj = new Object;
          let array = []; 
          for (let prop in data) {
           let value = data[prop];
           tobj[prop] = getAverageMark(value);
           array.push(tobj[prop]); 
           } 
           tobj.average = getAverageMark(array);
           console.log(tobj);
          }   

//    getAverageScore({
//     algebra: [2, 4, 5, 2, 3, 4],
//     geometry: [2, 4, 5],
//     russian: [3, 3, 4, 5],
//     phisics: [5, 5],
//     music: [2, 2, 6],
//     english: [4, 4, 3],
//     poetry: [5, 3, 4],
//     chemistry: [2],
//     french: [4, 4]
//   })