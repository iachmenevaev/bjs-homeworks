function parseCount (value){
    let result = Number.parseInt (value);
  if ( isNaN(result)){
      const numError = new Error ("Невалидное значение");
    throw numError;
  }
  else return result;
  }
  function validateCount(value){
    try { let resultvalue = parseCount(value);
        return resultvalue;
    }catch(numError){
  return numError;
    }
}     
//задача 2
class Triangle {
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
   if ( (a + b) < c  ||  (b + c) < a || (a + c) < b){
            const triaError = new Error ("Треугольник с такими сторонами не существует");
            throw triaError;
        }
      }
    getPerimeter (){
        let P = this.a + this.b + this.c;
        return P;
    }
    getArea() {
       let uP = (this.a+ this.b + this.c) / 2;
         let S = Math.sqrt(uP * (uP - this.a) * (uP -this.b) * (uP - this.c));
         return (S.toFixed(3));
    }
   }
  function getTriangle(a,b,c) {
      try {
          let triangleTwo = new Triangle(a,b,c);
            return triangleTwo;
      } catch (triaError){
            check = {
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            } ,  
            getArea () {
                return "Ошибка! Треугольник не существует";
            } 
        }         
             
          return check;
     }
    }
