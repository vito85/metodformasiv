
// //1.
// let res = 5 && 2 || 6 && 0;
// console.log(res); //?????? 








// 2.
// let obj = {
//     value: 2019,
// }

// function func(){
//     this.value = 2018;
// }

// func.call(obj);

// let res = obj.value;
// console.log(res); // ?????? 


// 3.
// console.log(new Number("5")+1 ); //????? 




// 4.

// let funk = (obj)=> {
//     obj.null;
// };

// let obj = {
//     name: "MIC",
//     null: 55,
// };

// funk(obj);
// console.log( obj.null); // ????? 




// 5.
// let arajin = [1,2,3];
// let erkrord = [1,2,3]


// console.log ( arajin === erkrord); //??? 
// console.log ( [] === []); 

// 5.1
// let str = "abc"
// let str1 = "abc"
// console.log(str == str1)








// 6. 
// for (var i = 0; i < 3; i++){
//     setTimeout(()=> {
//         console.log(i)
//     }, 0);
// }







// 7. 
// function User(name){
//     this.name = name;
//     return {
//     surname: "Petrosyan",
//     };
// }
// let user = new User("Petros");
// // console.log(user)
// console.log(user.name); //???? 



// 8.
// var res = 2019;
// var out = 2020;
// (function(){
//     // var res = undef
//     out = res;
//    var res = 2021;
    
// })(); 

// console.log(out) //????? 






// 9. 
// const parameters = [1,2,3,4,5,6];
// const res = Math.max.apply(7, parameters);
// console.log(res); // ??? 






// 10.
// const arrProto = Array.prototype.push;
// const arajin = [2019, 2020];
// const erkrord = [2017,2018];

// console.log(arrProto.apply(erkrord, arajin)); //????




// console.log({}.toString());

// 11.
// let str = Object.prototype.toString;
// let res = str.call(null);

// console.log(res);







// 12.

// function funk (){
//     return arguments.join("");
// };

// let res = funk(1,2);
// console.log(res); // ????







// 13. 
// let obj = {};
// console.log(obj)
// console.log("toString" in obj);// 






// 14.
// let arajin = 2019;
// let erkrord = new Number(arajin);//
// console.log(arajin === erkrord);// 











// 15.
// let res = 2019;
// let funk = (x = 2020) => {
//      res = x;
// }
// console.log(funk(null)); // ???







// 16.             
// console.log( null || 5 && 10 || 15 && (false || 55) && (undefined || 65));







// 17.
// class User {
//     constructor(name){
//         this.name = name;
//     }
//     sayName(){
//         console.log("MIC");
//     }
// };

// console.log(typeof User); // ?????







// 18.

// let arr = [1,5, 7,10,21,22,25,64,78,46,75,65];
// console.log( 7 in arr); // 







// 19.
// function funk(x, y){
//     return x*y;
// };
// let res = funk(50);
// console.log(res); // 







// 20.
// let arr = [2019, "December", 14];

// let [arajin, ...verjin] = arr;
// let res = verjin[0];
// console.log(res); // ?????






// let obj = {name: "abc", age: 25}
// let arr = [1,2,3]

// // console.log( delete obj)
// // console.log(delete arr)
// console.log(delete obj.name)
// console.log(delete arr[1])
// console.log( obj )
// console.log( arr )

// 21.

// let value1 = 2019;
// console.log(delete value1);
// let value2 = value1;
// console.log(value2); //????  


// ======================================================================



// 22.           
//  console.log(null && undefined || (false || 15 && true)); //???? 





// 23.
//  console.log("barev" < "hello"); // ???






// 24.
// let arr = [2,2,2];
// let map = (i,j)=> i*j;
// let res = arr.map(map);
// console.log(res); //???? 




// 25.

// const arr = new Array(10);
// const res = arr[0];
// console.log(arr); //????? 





// 26.
// let obj = new Object(); // {}
// // console.log(obj.__proto__)
// // console.log(Object.prototype)
// let res = obj.__proto__ instanceof Object;// 
// console.log(res); // ???








// 27.
// let res = [5,6,7,8,9,10];
// let val = res.splice(1,2);
// console.log(res.splice(1,2,...val)); // ???? 





// 28.
// console.log(true > false); //?? 





// 29.
// let func = () => {};
// let res = func instanceof Object;
// console.log(res); //





// 30.
// function funk(x,y = 5){
//     return x*y;
// };

// console.log(funk(5, null));//  





// 31.
// let x = 2019;
// function funk(){
//     funk1();
//     return;
//     function funk1(){
//        x = 2020;
//     }
//  }
// console.log( funk()); // 









// 32.
// class Car {
//     static getname(){
//         return "BMW";
//     }
// };

// let car = new Car();
// console.log(car.getname()); //????







// 33.
//  class People {
//     say(){}
//  };

//  let armen = new People();
//  console.log(armen.say === People.say);// 




// 34.
// var x = 10;

// var obj = {
//     x : 2,
//     get: ()=>{
//         setTimeout(() => {
//             console.log(this.x);
//         },0);
//     }
// }
// obj.get(); //






// 35.
// let funk = (x) => {
//     let y = x * 10;
    
// };
// console.log(funk(5)); //???





// 36.
// class Parent {
//     constructor(){
//         console.log("Hello From Parents");
//     }
// }

// class Child extends Parent {
//     constructor(){
//         super();
//         console.log("Hello from Child ")
//     }
// }
// let child = new Child();





// // 37.
// function funk(x){
//     let x = 100
//     console.log(x);
   
// };
// funk(6);//









// 38.


// let a = 100;
// funk();
// function funk(){
//     console.log(a );
// }






// 39.
// const people = {name: "Armen"};
// people.age = 25
// people.name = "Poghos";
// console.log(people)









// 40.
// let x = 50;
// for(let x = 0; x <= 60; x++){
//  // some code   
// };
//  // 
//  console.log(x);// ????





// 41. 
// class Car {};
// console.log(typeof Car);// 











// 42.
// var x = 25;
// var obj = {
//     x : 35,
//     get(){
//         return () => this.x;
//     }
// }
// console.log( obj.get()() ); // 

//=======================================================





// 43.

// function aaa(){
//     console.log(arguments[1]);
// }

// aaa(5,6,7,8);//

// let funk = () => {
//     console.log(arguments[1]);
// }

// funk(5,6,7);







// 44.
// let num = [1,2,3,4,5];
// let res = 0;
// num.forEach(a => res += a);
// console.log(res);// 




// 45.
// class Car {
//     static id = 325;
// };
// let car = new Car()
// console.log(car.id); //








// 46.
// let arr = [1,2,3];
// for(var i = 0; i< arr.length; arr[i++]=0);
// console.log(arr); // 







// 47.
// letres = "string";
// (function(){
//     res = typeofarguments
// })();
// console.log(res) // 





// 48.
// var param = "Hello";
// const res = window.param;
// console.log(res);

// 48.1
// let poghos = 95;
// const res1 = window.poghos;
// console.log(res1);



// ---------------------------------------------

// 49.
// const res = typeof Object;
// console.log(res);// 






// 50.
// let res = 2021;
// try {
//     res = 500/0;
// } catch(e) {
//     res = 0/500
// }
// console.log(res + ' war'); // 






// 51.

// const Num  = function(x){
//     return x;
// }
// const num1 = newNum(2021);
// console.log(num1 == 2021);// 





// 52.
// letres = 0;
// for(let i = 0; i< 6; i++){
//     if(i % 2){
//         res += i
//     }
// }
// console.log(res);// 







// 53.
// let val = 2021;

// setTimeout(()=> {
//     val = 2022;
//     // console.log(val)
// }, 1000);
// constres  =val;
// console.log(res) // ???




// 54.
// let arr = [1,2,3];
// let res = arr.unshift(0);
// console.log(res); //





// 55.

// const res = typeof !!null;
// console.log(res);







// 56.

// let arr=[2021];
// let [arajin, erkrord = 2022] = arr;
// let res = erkrord;
// console.log(res)






// 57.
// let arr = [1,2,3,5,6,3];
// let res = arr.lastIndexOf(3);
// console.log(res)

// let user = {
//     name: "John"
//   };
  
// var admin = user;
// admin.status = true;
// console.log(user.status)

// user =null;
// console.log(admin.name)

// let user1 = {
//     name: "Poghos"
// }
// var user3 = Object.assign({},user1);
// user3.position = "aaaa";

// console.log(user1, user3)

