// 1.1. What is the difference between a parameter and an argument?

//Parameters are placeholders for inputs of a function, and are assigned at the top of a function.
//Arguments are the values assigned when the function is called.

// 1.2. Within a function, what is the difference between return and console.log?

//'console.log' prints a value into the console, while 'return' sends a value to where the function is called.
//'console.log' is mainly for debugging.

// 1. 3. What are the implications of the ability of a function to return a value?

//'return' gives back a value from the function that can be used in the code.

// 2. calculateCube
function calculateCube(num) {
    return num * num * num
}
console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    return "aeiou".indexOf(letter) != -1;
}
console.log(isAVowel('y'));
console.log(isAVowel('o'));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let word1length = word1.length;
    let word2length = word2.length;
    return [word1length, word2length]
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    let sum = null;
    for (let i = 0; i<arr.length; i++) {
        sum += arr[i];
    } return sum;
}
console.log(sumArray([5, 2, 5]))

// 6.1 checkPrime
function checkPrime(num) {
    let sqRoot = Math.floor(Math.sqrt(num));
    for (let i = 2;  i <= sqRoot; i++) {
    if (num % i === 0) {
      return false;  
    } 
} return true;
}
console.log(checkPrime(6))
console.log(checkPrime(23))
console.log(checkPrime(75))
console.log(checkPrime(71))

// 6.2 printPrimes
function printPrimes(num) {
    let arr = [], limit = Math.floor(Math.sqrt(num)), output = [];
    for (let i = 0; i < num; i++) {
        arr.push(true);
    }
    for ( let i = 2; i<= limit; i++) {
        if (arr[i]) {
            for (let j = i * i; j < num; j += i){
                arr[j] = false;
            }
        }
    }
    for (let i = 2; i < num; i++) {
        if(arr[i]) {
            output.push(i);
        }
    }
    return output;
}
console.log(printPrimes(80))

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};