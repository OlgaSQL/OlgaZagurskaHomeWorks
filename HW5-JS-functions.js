/*
Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.

3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.

4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.

5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.

6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.

7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.

8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закнченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/


/*
1.1 
let hamburger = 44, fries = 42; 

if (hamburger >= 4 && fries >= 4){ 
    console.log('Ми поїли')
} else {
    console.log('Ми йдемо в інше кафе')
}

1.2.
let hamburger = 3, fries = 42, friends = 4; 

if (hamburger >= friends && fries >= friends){ 
    console.log('Ми поїли')
} else {
    console.log('Ми йдемо в інше кафе')
}

*/

function CheckIfEnoughFoodForFfriends(hamburger, fries, friends) {
    if (hamburger >= friends && fries >= friends) {
        console.log('Ми поїли');
    }
    else {
        console.log('Ми йдемо в інше кафе');
    }
}

enoughFoodForFfriends(3, 6, 4);



/* 2.
let num = 100;
 
if(num >= 1000 && num <= 1900){
    console.log('чи знаходиться значення ціни товару (а саме '+ num +') між 1000 та 1900 включно --- ТАК знаходиться');
} else {
    console.log('чи знаходиться значення ціни товару (а саме '+ num +') між 1000 та 1900 включно--- НІ не знаходиться');
}
*/
function CheckPrice1(num) {
    if (num >= 1000 && num <= 1900) {
        console.log('чи знаходиться значення ціни товару (а саме ' + num + ') між 1000 та 1900 включно --- ТАК знаходиться');
    } else {
        console.log('чи знаходиться значення ціни товару (а саме ' + num + ') між 1000 та 1900 включно--- НІ не знаходиться');
    }
}

CheckPrice1(1200);

/*3.1
let num = 1000;
 
if(num >=1000 && num <=1900){
    console.log('значення ціни товару (а саме '+ num +') НЕ знаходиться 1000 та 1900 включно --- FALSE (знаходиться)');
} else {
    console.log('значення ціни товару (а саме '+ num +') НЕ знаходиться між 1000 та 1900 включно--- TRUE (не знаходиться)');
}
*/
function CheckPrice2(num) {
    if (num >= 1000 && num <= 1900) {
        console.log('значення ціни товару (а саме ' + num + ') НЕ знаходиться 1000 та 1900 включно --- FALSE (знаходиться)');
    } else {
        console.log('значення ціни товару (а саме ' + num + ') НЕ знаходиться між 1000 та 1900 включно--- TRUE (не знаходиться)');
    }
}

CheckPrice2(1200);

/*3.2
let num = 1000;
 
console.log('Умова: значення ціни товару НЕ знаходиться між 1000 та 1900 включно');
console.log('Значення ціни товару: '+ num );
if(!(num >= 1000 && num <= 1900)){
    console.log('Результат: TRUE (не знаходиться)');
} else {
    console.log('Результат: FALSE (знаходиться)');
}
*/

/*4.
let num = 3;
 
  if (num == 1){
    console.log('Зима - діставай санчата та чекай діда з мішком подарунків');
} else if (num == 2){
    console.log('Весна - паска смачна та ситна тому не забувай про спорт');
} else if (num == 3){
    console.log('Літо - винеси нарешті ялинку на смітник та діставай купальник, якщо весною не забув про спорт');
} else if (num == 4){
    console.log('Осінь - йди сватати дівчат що тебе не люблять - повна комора гарбузів для зимової каші гарантована');
} else {
    console.log('цей номер не присвоєно жодній порі року');
}
*/
function GetSeason(num) {
    if (num == 1) {
        console.log('Зима - діставай санчата та чекай діда з мішком подарунків');
    } else if (num == 2) {
        console.log('Весна - паска смачна та ситна тому не забувай про спорт');
    } else if (num == 3) {
        console.log('Літо - винеси нарешті ялинку на смітник та діставай купальник, якщо весною не забув про спорт');
    } else if (num == 4) {
        console.log('Осінь - йди сватати дівчат що тебе не люблять - повна комора гарбузів для зимової каші гарантована');
    } else {
        console.log('цей номер не присвоєно жодній порі року');
    }
}

GetSeason(2);


/*5. Не впевнена чи це є вкладеним оператором
let a = 6, b = 7, c = 8; 
 
if ((b>a && a>c) || (b<a && a<c)){ 
    console.log('Middle is '+ a);
} else if ((a>b && b>c) || (a<b && b<c)){ 
    console.log('Middle is '+ b);
} else if ((b>с && с>a) || (b<a && c<a)){ 
    console.log('Middle is '+ c);
}
*/
function GetMiddle(a, b, c) {
    if ((b > a && a > c) || (b < a && a < c)) {
        console.log('Middle is ' + a);
    } else if ((a > b && b > c) || (a < b && b < c)) {
        console.log('Middle is ' + b);
    } else if ((b > с && с > a) || (b < a && c < a)) {
        console.log('Middle is ' + c);
    }
}

GetMiddle(5, 6, 8);


/*6.
let number = '0';
 
switch(number){
    case '1':
        console.log('Понеділок')
        break;
    case '2': 
        console.log('Вівторок')
        break;
    case '3':
        console.log('Середа')
        break;
    case '4':
        console.log('Четвер')
        break;
    case '5':
        console.log('Пятниця')
        break;
    case '6':
        console.log('Субота')
        break;
    case '7':
        console.log('Hеділя')
        break;
    default: 
        console.log('This is default output')
        break; 
}
*/
function GetDay(number) {
    switch (number) {
        case 1:
            console.log('Понеділок')
            break;
        case 2:
            console.log('Вівторок')
            break;
        case 3:
            console.log('Середа')
            break;
        case 4:
            console.log('Четвер')
            break;
        case 5:
            console.log('Пятниця')
            break;
        case 6:
            console.log('Субота')
            break;
        case 7:
            console.log('Hеділя')
            break;
        default:
            console.log('This is default output')
            break;
    }
}

GetDay(7);


/*7.
let operator = '/';
 
switch(operator){
    case '+':
        console.log(8+3)
        break;
    case '-': 
        console.log(8-3)
        break;
    case '*':
        console.log(8*3)
        break;
    case '/':
        console.log(8/3)
        break;
    default: 
        console.log('This is default output')
        break; 
        
}
*/
function GetSum(operator) {
    switch (operator) {
        case '+':
            console.log(8 + 3)
            break;
        case '-':
            console.log(8 - 3)
            break;
        case '*':
            console.log(8 * 3)
            break;
        case '/':
            console.log(8 / 3)
            break;
        default:
            console.log('This is default output')
            break;

    }
}

GetSum('*');


/*.8
let str = " Hello world! ";
  console.log(str.replace(/[eo]/g, "" ))
*/
function ReplaceSymbol(str) {
    console.log(str.replace(/[eo]/g, ""))
}

ReplaceSymbol("Hello world!");

/*9.Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
так щоб в консоль виводився результат обчислень з правильним закнченням.
Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.
 
Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
 
Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/

/*const METR_IN_KM = 1000;
let metersValue = 6000;
let result = metersValue / METR_IN_KM;
let lastStringValue = result.toString().slice(-1);
let lastNumberValue = Number(lastStringValue);

console.log(result)
console.log(lastNumberValue)

if (Number.isInteger(result) && (lastNumberValue == 1)) {
    console.log(result + '  кілометр');
} else if (Number.isInteger(result) && (1 < lastNumberValue && lastNumberValue < 5)) {
    console.log(result + '  кілометри');
} else if (Number.isInteger(result) && (4 < lastNumberValue && lastNumberValue <= 9)) {
    console.log(result + '  кілометрів')
} else {
    console.log(result + '  кілометра')
}
*/

function MeterInKm(metersValue) {
    const METR_IN_KM = 1000;
    let result = metersValue / METR_IN_KM;
    let lastStringValue = result.toString().slice(-1);
    let lastNumberValue = Number(lastStringValue);

    //console.log(result)
    //console.log(lastNumberValue)

    if (Number.isInteger(result) && (lastNumberValue == 1)) {
        console.log(result + '  кілометр');
    } else if (Number.isInteger(result) && (1 < lastNumberValue && lastNumberValue < 5)) {
        console.log(result + '  кілометри');
    } else if (Number.isInteger(result) && (4 < lastNumberValue && lastNumberValue <= 9)) {
        console.log(result + '  кілометрів')
    } else {
        console.log(result + '  кілометра')
    }
}

MeterInKm(1200);
MeterInKm(4000);