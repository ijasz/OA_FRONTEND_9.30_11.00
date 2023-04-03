// Higher order func

// function name(func) {
//     return name
// }

// console.log(name(() => { console.log("callback"); }));

// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];


// Remove negative numbers
function removeNeg(numbers, callback) {
    const obj = {
        posNumbers: [],
        negNumber: []
    }
    for (const x of numbers) {
        if (callback(x)) {
            obj.posNumbers.push(x);
        } else {
            obj.negNumber.push(x)
        }
    }
    return obj;
}



// Call removeNeg with a Callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

console.log(posNumbers);


