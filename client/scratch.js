// take an array of letters and find which letter is the most common
// If two letters appear the same amount of times display them all in alphabetical order i.e aaabbbccc

// go through every letter and count every instance of that letter.
// create a for loop of the array
// for every instance of a letter count how many times that letter shows up. 
// create an object with key value pairs.
// When the for loop hits a new letter it creates a key value of that letter and starting with 1
// When the for loops hits the same letter it updates the value of it's key in the object. 


const lettersObject = {

}



console.log(lettersObject)

const letters = "aalkjdflkajfksjfkjdafjdsojodsjsofffffjnenoanewnjnenekn"

for (let i = 0; i < letters.length ; i++) {
    let char = letters[i];
    

    if (char in lettersObject){
        lettersObject[char]++

    }
    else (
      lettersObject[char] = 1
    )
    
}

let highestValue = 0

Object.keys(lettersObject).map(key =>{
    if (lettersObject[key] > highestValue) {
        highestValue = lettersObject[key]
    }
});

Object.keys(lettersObject).map(key => {
    if (highestValue == lettersObject[key]){
        let letters = ""
        for (i = 0 ; i < highestValue; i++){
            letters += key
        }
        console.log(letters)
    }
})


// if you had a variable with a string. 
// how would you reverse the string without creating a new variable?

let superman = "superman"