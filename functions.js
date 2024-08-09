// forEach function
const Nirmal = [
    {
        Name : "Nirmal Dhakal",
        rollno : 1,
        address:"rampur"
    },
    {
        Name : "Rachana Pandey",
        rollno : 2,
        address:"Manigram"
    }
]
Nirmal.forEach(function(hello){
    console.log(hello.Name)
})

// another example of forEach function
const code = [
    {
        _id: "66b3711a18d90581711ba314",
        text: "test1",
        userId: "f552665",
        title: "test1",
        ipAddress: "188.253.102.11",
        createdAt: "2024-08-07T13:05:30.346Z",
        updatedAt: "2024-08-07T13:05:30.346Z",
        __v: 0
    },
    {
        _id: "66b3712218d90581711ba31a",
        text: "test2",
        userId: "f552665",
        title: "test2",
        ipAddress: "188.253.102.11",
        createdAt: "2024-08-07T13:05:38.079Z"
    }
]
code.forEach(function(hello){
console.log(hello.userId)
console.log(hello.ipAddress)
})





// map function



//  program to append the first and last name and print it.
const people = [
    {
        firstName: "nirmal",
        lastName: "dhakal"
    },
    {
        firstName : "rachana",
        lastName: "pandey"
    }
]
const data = people.map(function(person){
   return{
    firstName : person.firstName,
    lastName : person.lastName,
    fullName : person.firstName + person.lastName
   }
})
console.log(data)

// mathi ko lie simple ma lekhnai tarika , shortcut ma
const people = [
    {
        firstName: "nirmal",
        lastName: "dhakal"
    },
    {
        firstName : "rachana",
        lastName: "pandey"
    }
]
const data = people.map(function(person){
   return{
    // firstName : person.firstName,
    // lastName : person.lastName,
    // yo duita lekhnu ko satho ... lekhera pani output lina shakinxa 
    ...person,
    fullName : person.firstName + person.lastName
   }
})
console.log(data)


// program to print total amount of the product :
const product =[
    {
        Name : "apple",
        price : 200,
        qty : 2
    },
    {
        Name : "mango",
        price : 100,
        qty : 2
    },
    {
        name : "PineApple", 
        price : 300, 
        qty : 1
    }
]
const newProduct = product.map(function(nirmal){
    return{
        ...nirmal,
        total: nirmal.price * nirmal.qty
    }
})
console.log(newProduct)

// program to print square of the elements in the array :

const num =[1,2,3,4,5]
const square = num.map(function(squire){
    return squire*squire
})
console.log(square)


// filter function 

// program to print only even number from the array :
const numbers = [1,2,3,4,5,6,7,8,9,10]
const Even = numbers.filter(function(num){
    return num % 2 ==  0

})


console.log(Even)

//  program to selce only the filtered age :

const Name = [
    {
        Title : "nirmal dhakal",
        year : 2003
    },
    {
        Title : "nabin dhakal",
        year : 2001
    },
    {
        Title : "dharmu bhusal",
        year : 2002
    },
    {
        Title : "arun Neupane",
        year : 2005
    }

]

const newBooks= Name.filter(function(book){
    return book.year > 2000
})
console.log(newBooks)

// using filte to give output of js files 
const file = ["app.js", "a.c","index.html","syle.css","script.js"]
const result = file.filter(function(files){
return files.endsWith(".js")
})
console.log(result)