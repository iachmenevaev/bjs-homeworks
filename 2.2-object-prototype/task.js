
String.prototype.isPalindrome = 
 function isPalindrome() {
   let String = this.toLowerCase();
    let n = String.length;
    for (let i = 0; i < n; i++)
        if (String [i] === String[ n - i - 1]){
            return true;
        }
        else {
            return false;
        }
}
console.log("А роза упала на лапу Азора")
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
        let averageMark = Math.round(aver);
        return averageMark;
    }   

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}