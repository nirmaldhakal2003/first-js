// 0 dekhi 4 samma ko arry ka number bayek aaru lie remove gardinaxa yo 
// slice le 
const numbers = [1,2,3,4,5,6]
console.log(numbers.slice(0,4))


// arko method for same task 
const numb = [1,2,3,4,5,6,7,8,9]
const newNumb = numb.slice(0,4)
console.log(newNumb)

// splice ko use now:
// suru ko 2 le kha bata katne 
// arko 2 le kati ota katni 
// lastko number chai changed garni number
numbers.splice(2,2,9)
console.log(numbers)

// use of split
const text = "I love Rachana"
const newText = text.split(' ')
console.log(newText)

const lang = ["nimal","Loves","so","much"]
const newLang = lang.splice(2,0,"rachana")
console.log(lang)

const char = ['m','a','n','i','s','h']
const newChar = char.splice(0,6,13,1,14,9,19,8)
console.log(char)