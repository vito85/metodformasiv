//1.
// let res = 5 && 2 || 6 && 0;
// console.log(res); //?????? 








// 2.

// let obj = {
//     value: 2019,
// }



// const func = () =>{
//     this.value = 2018;
// }

// //func.call(obj)

// let res = obj.value;
// console.log(res); // ?????? 

// // 18
// // 2019
// // 019

// 3.
// console.log(new Number("5")+1 ); //????? 
// console.log(+("5")+1 ); //????? 

// 4.



// let obj = {
//     name: "MIC",
//     null: 55,
// };

// console.log( obj.null); // ????? 




// 5.

// let arajin = [1,2,3];
// let erkrord = [1,2,3]


// console.log ( arajin === erkrord); //???   
// console.log ( [] === []); 

// 5.1
// let str = 1
// let str1 = 1
// console.log(str == str1)
// console.log(str = str1)
// console.log(str === str1)








// 6. 

// for (var i = 0; i < 3; i++){
//     setTimeout(()=> {
//         console.log(i)
//     }, 1000);
// }







// 7. 

// function User(name){
//     this.name = name;
    
//     return {
//         surname: this.name,
//     };
// }
// let user = new User("Petros");
// // console.log(user)
// console.log(user.surname); //???? 



// 8.

// var res = 2019;
// var out = 2020;
// (function(){
//     // var res = undef
//    out = res;
//    var res = 2021;
    
// })(); 

// console.log(out) //????? 






// 9. 

// const parameters = [1,2,3,4,5,6];
// const res = Math.max(...parameters);
// console.log(res); // ??? 






// 10.

// const arrProto = Array.prototype.push;
// const arajin = [2019, 2020];
// const erkrord = [2017,2018];

// //console.log(arrProto.apply(erkrord, arajin)); //????




// console.log({}.toString());

// 11.
// let str = Object.prototype.toString;
// let res = str.call(null);

// console.log(res);







// 12.

// function funk (a,b,c){
//     return arguments.length
// };

// let res = funk(1,2,4);
// console.log(res); // ????







// 13. 

// let obj = {
//     "Vazgen":"Davtyan",
// };
// console.log(obj)
// console.log("Vazgen" in obj);// 






// // 14.
// let arajin = 2019;
// let erkrord = new Number(arajin);//

// console.log(arajin === erkrord);// 














// 15.
// let res = 2019;
// let funk = (x = 2020) => {
//  res = x;
// }
// console.log(funk(null)); // ???







// 16.             
//  console.log( null || 5 && 10 || 15 && (false || 55) && (undefined || 65));







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
// console.log( "7" in arr); // 
// console.log(arr.includes('1'));








// function funk(x, y){
//     return x+y;
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

// console.log( delete obj)
// console.log(delete arr)
// console.log(delete obj.dsafddsgf)
// console.log(delete arr[1])
// console.log( obj )
// console.log( arr )

// 21.
// let value1 = [2019];

// console.log(value1)
// // console.log(delete value1[0]);
// // let value2 = value1;
// // console.log(value2); //????  

