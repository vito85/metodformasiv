//1
              // console.log(null && undefined || (false || 15 && true));//???? 
        





// 2.
//  console.log("barev" < "hello"); // ???






// 3.
// let arr = [2,2,2];
// let map = (i,j)=> i*j;
// let res = arr.map(map);
// console.log(res); //???? 




// 4.

// const arr = new Array(10);
// const res = arr[0];
// console.log(arr); //????? 


//5

// for (var i = 0; i < 3; i++){
//     setTimeout(()=> {
//         console.log(i)
//     }, 1000);
// }




// 6.
// let obj = new Object(); // {}
//  console.log(obj.__proto__)
// console.log(Object.prototype)
// let res = obj.__proto__ instanceof Object;// 
// console.log(res); // ???








// 7.
// let res = [5,6,7,8,9,10];
// let val = res.splice(1,2);

// console.log(res.splice(1,2,...val)); // ???? 





// 8.
// console.log(true > false); //?? 







// 9.
// let func = () => {};
// let res = func instanceof Object;
// console.log(res); //







// 10.
// function funk(x,y = 5){
//     return x*y;
// };

// console.log(funk(5,null));//  







// // 11.
// let x = 2019;
// function funk(){
//     funk1();
//     return;
//     function funk1(){
//        x = 2020;
//     }
//  }
// console.log( funk()); // 









// 12.
// class Car {
//      static getname(){
//         return "BMW";
//     }
// };

// let car = new Car();
// console.log(car.getname()); //????







//13.
//  class People {
//     say(){}
//  };

//  let armen = new People();
//  console.log(armen.say === People.say);// 




// 14.
// var x = 10;
// var obj = {
//     x : 2,
//     get: ()=>{
        
//         setTimeout(() => {
           
//             console.log(this.x);
//         },0);
//     }
// }
// obj.get() //









// 15.
// let funk = (x) => {
//     let y = x * 10;
    
// };
// console.log(funk(5)); //???





// 16.
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





// // 17.
// function funk(x){
//     let x = 100
//     console.log(x);
   
// };
// funk(6);//









// 18.

//  funk();

// let a = 100;

// function funk(){
//     console.log(a );
// }






// 19.
// const people = {name: "Armen"};
// people.age = 25
// people.name = "Poghos";
// console.log(people)









// 20.
// let x = 50;
// for(let  x = 0; x <= 60; x++){
//  // some code   
// };
//  // 
//  console.log(x);// ????





// 21. 
// class Car {};
// console.log(typeof Car);// 