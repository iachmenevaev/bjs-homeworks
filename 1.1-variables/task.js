 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */

function averageMark(a, g, p) {
	var algebra = a;
    var geography = g;
    var physics = p;
    var x = (algebra + geography +physics) / 3;
    return x;
	
    // реализуйте здесь задание №1
    
	return // ваш ответ;
}

function sayHello(userName) {
	var myName = userName;
	var message = `Привет, мир!Меня зовут ${myName}`;
		return message;
	
    // реализуйте здесь задание №2
    
	// ваш ответ;
}

function calculateFormula() {
    
	// реализуйте здесь задание №3
    
    return // ваш ответ;
}
