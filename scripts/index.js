// Вводятся длины трех сторон предполагаемого треугольника.
// Определить, может ли существовать треугольник с такими сторонами при условии что,
// треугольник существует только тогда, когда ни одна его сторона не превышает сумму двух других.

// prompt принимает ввод в виде строки(string), а унарный плюс - приобразует в numbers
// let a = +prompt('Введите стороу a: '), b = +prompt('Введите сторону b: '), c = +prompt('Введите сторону c');

// if(a < (b + c) && b < (a + c) && c < (a + b)){
//     alert('Треугольник существует')
// }else {
//     alert('Треугольник не существует')
// }

// alert((a < (b + c) && b < (a + c) && c < (a + b)) ? 'Треугольник существует' : 'Треугольник не существует')


// Составить массив длиной 10 элементов со случайными числами. Через цикл for...in вывести элементы с четными значениями. 

// let arr = [1,3,6,9,1,5,4,7,8,12]

// for(value in arr){
//     if(arr[value] % 2 === 0){
//         console.log(arr[value])
//     }

//     (arr[value] % 2 === 0) ? console.log(arr[value]) : ''; 
// }


// codewars -> 8 - 10 задач

// let i = 0;

//Цикл с предусловием(условие перед телом)
// while(i < 10){
//     console.log(i);
//     i++;
// }

// console.log(i)
//Цикл с постусловием(условие после телом)
// do{
//     console.log(i);
//     i--;
// }while(i > 0);

//Цикл с параметром
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

//for...in
// let obj = {
//     'key_1': 'value_1',
//     'key_2': 'value_2'
// }
// for(key in obj){
//     console.log(obj[key])
// }
// let array = [1,2,3,4,5]
// for(index in array){
//     console.log(array[index])
// }


//for...of
// let str = 'String';
// for(char of str){
//     console.log(char);
// }
// S, t, r, i, n, g


// str = 'String';
// for(char in str){
//     console.log(char);
// }
// 0, 1, 2, 3, 4, 5


// const users_list = document.getElementById('users');
// const users = ['Даниил', 'Дмитрий', 'Елена', 'Ирина', 'Иван', 'Оксана'];

// for(user of users){
//     let user_li = document.createElement('li');
//     user_li.innerText = user;
//     users_list.appendChild(user_li);
// }

// // Дано целое число. Если оно является положительным то прибавить к нему 1, в противном случае вычесть из него два. Вывести полученное число. 
// // Реализовать через if-else и ?

// let num = 12

// if(num >= 0){
//     console.log(num + 1)
// } else{
//     console.log(num - 2)
// } 

// console.log((num >= 0) ? num + 1 : num - 2)


// // Даны три стороны одного треугольника и три стороны другого треугольника. 
// // Определить, будут ли эти треугольники равновеликими, т. е. имеют ли они равные площади.

// let a_1 = 6, b_1 = 6, c_1 = 4;
// let a_2 = 8, b_2 = 8, c_2 = 6;

// let p_1 = (a_1 + b_1 + c_1) / 2;
// let S_1 = p_1 * (p_1 - a_1) * (p_1 - b_1) * (p_1 - c_1);

// let p_2 = (a_2 + b_2 + c_2) / 2;
// let S_2 = p_2 * (p_2 - a_2) * (p_2 - b_2) * (p_2 - c_2);


// if(S_1 === S_2){
//     console.log('Треугольники равновелики')
// } else {
//     console.log('Треугольники не равновелики')
// }

// console.log((S_1 === S_2) ? 'Треугольники равновелики' : 'Треугольники не равновелики')


// // Составить программу, которая запрашивает ввод трех значений температуры и проверяет, есть ли среди них температура таяния льда(0)?
// let first = -20, second = -15, third = 0;

// if(first >= 0 || second >= 0 || third >= 0){
//     console.log('Есть температура таяния льда')
// } else {
//     console.log('Нет температуры')
// }


// let temps = [-20, -15, 0, -10, 2], is_ice = true
// // for..in -> 0,1,2,3
// // for..of -> -20, -15, 0, 3

// for(value of temps){
//     if(value >= 0){
//         console.log('Есть температура таяния льда');
//         is_ice = false;
//         break;
//     }
    
// }

// if(is_ice){
//     console.log('Нет температуры таяния льда');
// }


// temps = [-20, -15, 0, -10, 2]
// temps = temps.filter(temp => temp >= 0)
// console.log((temps.length > 0) ? 'Есть температура таяния льда' : 'Нет температуры таяния льда')




// users.map(user => {
//     let user_li = document.createElement('li');
//     user_li.innerText = user;
//     users_list.appendChild(user_li);
// })



// // Вводятся три значения ускорения свободного падения. 
// // Программа должна проверить, есть ли среди них ускорение свободного падения земли (9.8 м/c).

// let sps = [7.6, 9.8, 12.1], is_sps = true


// for(value of sps){
//     if(value === 9.8){
//         console.log('Есть ускорение свободного падения')
//         is_sps = false;
//         break;
//     }
// }

// Имеется   стена   высотой   h   метров   и   шириной   n   метров.   Требуется определить сколько 
// нужно купить рулонов обоев   для оклейки всей  стены,если длина рулона l метров, а ширина m метров. Все значения входные ивыходные – целые числа

let h = 2, n = 5, l = 4, m = 1; S_roll = l * m, S_wall = h * n;

console.log(Math.ceil(S_wall / S_roll))




// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩
// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩
// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩
// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩
// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩
// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩
// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩
// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩
// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩
// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩
// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩
// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩
// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩
// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩
// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩
// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩
// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩
// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩
// ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩ ▩▩▩▩▩▩▩▩▩


// 1. filter - Дается массив из 5 имен, необходимо оставить в массиве только те имена, чья длина больше 5

let arr = ['Дмитрий', 'Александр', 'Анастасия', 'Елена', 'Андрей']

// arr = arr.filter(name => name.length > 5)
// console.log(arr)

// for(name of arr)
//     console.log(name)
// 2. map - К каждому имени прибавить в начале строку "Имя: "

// arr = arr.map(name => 'Имя: ' + name )

// console.log(arr)

// arr[0] = 'Имя ' + arr[0]
// console.log(arr)

let arr_2 = [['Санкт-Петербург', 'Грота', '4'],['Москва', 'Зеленая', '7'],['Псков', 'Рижская', '19']]

// console.log(`г. ${adress[0]}, ул. ${adress[1]}, д. ${adress[2]}`)
arr_2 = arr_2.map(adress => `г. ${adress[0]}, ул. ${adress[1]}, д. ${adress[2]}`)

console.log(arr_2)

// console.log('abc'.includes('d'))

// console.log(arr_2[1].split(', ')[0].slice(3).includes('в')) Санкт-Петербург

arr_2 = arr_2.filter(adress => adress.split(', ')[0].slice(3).includes('в'))

console.log(arr_2)



// Передается массив с именами пользователей, необходимо заменить все буквы o на 0

let arr_3 = ['Олег', 'андрей', 'алеКсей', 'Орион']
 
arr_3 = arr_3.map(name => name.replace(/о/gi, '0'))


// console.log(arr_4)

// Первую букву сделать заглавной и отсортировать имена по первой букве.
let arr_4 = ['олег', 'андрей', 'алексей', 'орион']

arr_4 = arr_4.map(name => name.replace(/^./, name[0].toUpperCase()))


for (let i = 0; i < arr_4.length; i++) {
    for (let j = 0; j < arr_4.length - i; j++) {
        if (arr_4[j] < arr_4[j + 1]) {
            let tmp = arr_4[j];
            arr_4[j] = arr_4[j + 1];
            arr_4[j + 1] = tmp;
        }
    }
}
  
console.log(arr_4)

// [ширина, долгота]
//Оставить только те координаты, где отдаление от экватора не больше 15
coords = [[12, 38], [45, 230], [10, 50], [8, 350], [0, 21], [41, 115]] 

coords = coords.filter(coord => coord[0] <= 15)

for(coord of coords){
    console.log(`Широта = ${coord[0]}, Долгота = ${coord[1]}`) // Широна = {}/ Долгота = {}

// Функции 
}


// Функция - именнованное пространство кода, принимающее и возвращающее значения

// Аргументы - это передаваемые при вызове функции значения
// function func_name(func_arg_1, func_arg_2){
//     function body
    
//     оператор возврата значения
//     return 'значение'
// }


// Написать функцию, которая принимает 2 числа, каждое возводит в квадрат и возвращает их сумму


function pow_sum(a, b){
    return a ** 2 + b ** 2
}


console.log(pow_sum(1, 4)); // 1 + 16 -> 17
console.log(pow_sum(3, 5)); // 9 + 25 -> 34
console.log(pow_sum(10, 12)); // 100 + 144 -> 244


// amount - количество элементов в массиве
// max - максимальное значение элемента при генерации массива
function random_array(amount, max){
    let array = [];
    for(let i = 0; i < amount; i++){
        array.push(Math.floor(Math.random() * max))
    }
    return array;
}


let N = 10;
let array = random_array(N, 20);

console.log(array)


// Написать функцию, которая принимает число и возвращает его в степени 5. Результат работы функции должен быть записать 
// в переменную и выведен в формате `${исходное число} ^ 5 = ${результат функции}`.

// Проверить на числах: 3 = 243, 10 = 100000, 7 = 16807, 2 = 32

function pow(number, degree){
    return number ** degree
}

console.log(pow(3,2))
console.log(pow(3,3))
console.log(pow(3,16))

function upperLetter(string) {
    return string.replace(/^./, string[0].toUpperCase())
}

console.log(upperLetter('dima'))

// Функция, которая принимает ширину и высоту и возвращает в виде массива периметр и площадь

// Найти диагональ прямоугольника
function rectangle(width, height){
    return [(width + height) * 2, width * height, (width ** 2 + height ** 2) ** 0.5 ]
}

let rect_1 = rectangle(3,6)
console.log(rect_1)

let rect_2 = rectangle(5,4)
console.log(rect_2)

