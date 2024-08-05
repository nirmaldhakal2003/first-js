// conditional statement 
const isRaining = true
if(isRaining)
{
    console.log("carry umbrella with you")
} else{
    console.log("no need to carry umbrella")
}

// ternary operator use 
// isRaining ? console.log("umbrella boka"): console.log("umbrella na boka")


// short circuit
// isRaining && console.log("umbrela boka")  AND gate ko use 
// isRaining || console.log("umbrella na boka") OR get ko use

const temperature = 30
if(temperature >30){
    console.log("hotter")
}else if(temperature>25){
    console.log("mild temperature")
}else{
    console.log("cold")
}

// nullish coelescing operator --> value null xa ki nai vanni check garxa hai ta yo le.
const age = null
const result = age ?? "no age"
console.log(result)




