let a = [[1.11,2,3], [3,4,5],[5,6,7] ]


let b = a.reduce(function(prev,item) {
    return prev.concat(item)
})
console.log(b.sort())

// let c = b.includes(parseInt("5"))

// console.log(c)

// let a = "330,69 €IncludedIncluded"

// let b = a.split(" ")

// let c = b[0]

// console.log(c)
// parseFloat

// // replase

// let a = ["br","25"]

// let b = parseInt(a[0][0])
// console.log( typeof b === "number")

// // for(let i = 0 ; i < a.length ; i++){


// //     if(a[i][0] === "-" || typeof +a[i][0] ==="number") {
  
// //     console.log(a[i])
// // }
// // }
  
// // console.log(b)