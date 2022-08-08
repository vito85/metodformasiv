// arr.unshift(x) -----  Զանգվածի սկզբում տարրի ավելացում
// arr.shift() -----  Զանգվածի առաջին տարրի հեռացում
// arr.push(x) ------ Զանգվածի վերջում տարրի ավելացում
// arr.pop() -------- Զանգվածի վերջին տարրի հեռացում

// arr.sort() ----- տեսակավորում է զանգվածը տեղում՝ փոխելով դրա տարրերի հերթականությունը
// arr.reverse() ---- փոխում է arr-ի տարրերի հերթականությունը
// arr.includes() ----  որոշում է, թե արդյոք զանգվածը պարունակում է որոշակի տարր՝ կախված դրանից՝ վերադարձնելով true կամ false
// arr.indexOf() ---- վերադարձնում է առաջին ինդեքսը, որով տվյալ տարրը կարելի է գտնել զանգվածում, կամ -1, եթե այդպիսի ինդեքս չկա


// arr.concat(arr2) ------ստեղծում է նոր զանգված միացնելով գոյություն ունեցող զանգվածները.
//arr.find(function(item, index, array))  -- օգտագործվում է զանգվածի առաջին տարրի արժեքը ստանալու համար, որը բավարարում է տրված պայմանին

// arr.forEach(function(val ,i)) ---  թույլ է տալիս ֆունկցիա գործարկել զանգվածի յուրաքանչյուր տարրի համար
// arr.map(function(val, i)) ---- կանչում է ֆունկցիա զանգվածի յուրաքանչյուր տարրի վրա և վերադարձնում է այդ ֆունկցիայի արդյունքների զանգվածը։
// arr.filter(function(val, i)) ---  ստեղծում է նոր զանգված բոլոր տարրերով, որոնք անցնում են ֆունկցիայի մեջ նշված թեստը
// arr.reduce(function(prevVal, item, index), [inital])  ---օգտագործվում են ամբողջ զանգվածի վրա հիմնված որևէ մեկ արժեք հաշվարկելու համար:
// arr.slice(1,3) ---------վերադարձնում է նոր զանգված, որը պարունակում է բնօրինակ զանգվածի մի մասի պատճենը0
// arr.splice(start[, deleteCount[, item1[, item2[, ...]]]]) 
// arr.splice(1, 2, "cat", "dog")-------  փոփոխում է զանգվածի բովանդակությունը՝ հեռացնելով գոյություն ունեցող տարրերը և/կամ ավելացնելով նորերը





//______________________________________________________

// let arr = [1, 2, 3];

// arr.unshift(0) // 4
// console.log(arr); // [0,1,2,3]

// ----------------------------------

// let arr = [1, 2, 3];

// arr.shift() // 1

// console.log(arr); // [2,3]

// ----------------------------

// let arr = [1, 2, 3];

// arr.push(4) // 4
// console.log(arr); // [1,2,3,4]

// -------------------------------

// let arr = [1, 2, 3];

// arr.pop() // 3
// console.log(arr);  // [1,2]

//___________________________________________
// sort

// let number = [1,5,6,4,9,2,7,3,8]
// console.log(number.sort());  // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//---------------------

//reverse 

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// console.log( arr ); // 5,4,3,2,1
//-------------------------

// includes()

// const array1 = [1, 2, 3];

// console.log(array1.includes(2)); //true

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat')); //true

// console.log(pets.includes('at')); //false
//---------------------------------------

// indexOf 

// let arr = [1, 0, false];

// console.log( arr.indexOf(0) ); // 1
// console.log( arr.indexOf(false) ); // 2
// console.log( arr.indexOf(null) ); // -1

// console.log( arr.includes(1) ); // true




//___________________________________________
// const arr1 = ["Arman", "Vazgen"];
// const arr2 = ["Shogher", "Ani", "Anahit"];
// const arr3 = ["Vito", "Vruyr"];

// const student = arr1.concat(arr2)
// console.log(student); //['Arman', 'Vazgen', 'Shogher', 'Ani', 'Anahit']

// const student1 = arr1.concat(arr2, arr3);
// console.log(student1); // ['Arman', 'Vazgen', 'Shogher', 'Ani', 'Anahit', 'Vito', 'Vruyr']

//__________________________________________________

// find,  findindex

// let x = [7, 10, 22, 55, 100, 3, 10];

// console.log(x.find(function(val){    // 55
//     return val > 50;
// }));
// console.log(x.findIndex(function(val){    // 3
//     return val > 50;
// }));
//----------
// let users = [
//     {id: 1, name: "Arman"},
//     {id: 2, name: "Vito"},
//     {id: 3, name: "Vruyr"}
//   ];

//   let user = users.find(item => item.id === 1);

//   console.log(user.name); // Arman
// ___________________________________________

// forEach

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     console.log(`${item} имеет позицию ${index} в ${array}`);
//   });

//———————————

// map

// let x = [1,2,3,4,5]
// let y = x.map(function(val, i){
//     return val*2
// })
// console.log(y); //  [2, 4, 6, 8, 10]
//-------------------------------------------

// filter

// let x = [17, 22,31,25,14,5,12,9]

// let y = x.filter(function(val){
//     return val > 10 && val < 20
// })
// console.log(y);

//-----

// let people = [
//     {
//      name: "Arman",
//       age: 24 
//     } ,
//     {
//      name: "Vito",
//       age: 35 
//     } ,
//     {
//      name: "Vruyr",
//       age: 31
//     } 
// ];
// let res = people.filter(function(val){
//     return val.age > 30;
// }).map(function(val){
//     return val.name
// })
// console.log(res);
//________________________________________________

// reduce

// let arr = [1,2,3,4,5]
// let res = arr.reduce(function(aggr, val){ // aggr = 0,
//     return aggr + val  // 1+2+3+4+5
// },0)

// console.log(res); 

//---------------------------------------

// slice 

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2)); // ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4)); //["camel", "duck"]

// console.log(animals.slice(1, 5)); //["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2)); //["duck", "elephant"]

// console.log(animals.slice(2, -1)); //  ["camel", "duck"]

// console.log(animals.slice()); // ["ant", "bison", "camel", "duck", "elephant"]

//---------

// let arr = ["t", "e", "s", "t"];

// console.log( arr.slice(1, 3) ); // e,s 

// console.log( arr.slice(-2) ); // s,t 

// --------------------------------------------------------------------------

//splice

// let arr = ["Я", "изучаю", "JavaScript"];

// console.log(arr.splice(1,1)); // ['изучаю']
// console.log(arr); // ['Я', 'JavaScript']
//-----

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// console.log(arr.splice(0, 3, "Давай", "танцевать")); //'Я', 'изучаю', 'JavaScript']

// console.log(arr); // теперь ["Давай", "танцевать", "прямо", "сейчас"]

//-------
// let arr = ["Я", "изучаю", "JavaScript"];

// arr.splice(2, 0, "сложный", "язык");

// console.log( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"
//-------

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// let removed = arr.splice(0, 2);

// console.log( removed ); // "Я", "изучаю" 
// console.log(arr); // ['JavaScript', 'прямо', 'сейчас']