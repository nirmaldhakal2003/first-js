// looping concept

const number = [1,2,3,4,5,6,7]
for(var i=0;i<6;i++){
    console.log(number[i])
}
//  same as above
const numbers = [1,2,3,4,5,6,7]
var i
for( i=0;i<6;i++){
    console.log(numbers[i])
}  

// message lie dherai pali print garna paryo vani 
for(var i=0;i<=10;i++){
    console.log("i love you rachana")
}


// if array ko length tha xaina vani num.length use garna shakinxa 
const num = [1,2,3,4,5,6,7,8,9,0,6,5,4,3,3,5,6]
for(var i=0;i<num.length;i++){
    console.log(num[i])
}

// var i ko use na gari looping garni tarika
const nums = [1,2,3,4,5,6,7,8,9,0,6,5,4,3,3,5,6]
for(let number of nums){
    console.log(nums)
}
