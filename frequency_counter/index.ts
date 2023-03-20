
interface IHash {
    [squaredNumber: number]: number
}

const same = (firstArray: number[], secondArray: number[]) => {
    //O(n^2)
    //For each element of first Array
    //Square the number
    //Check if second array has it
    //If second array has it then remove it from secondArray
    //If it doesn't then return false
    //End of first array - return true
    //O(n)
    //Go through second array and create a map of key(squared number) and value is the number of occurrences
    //For each element of firstArray check object has key and value is not 0
    //If key is there negate 1

    if (firstArray.length !== secondArray.length) {
        return false;
    }

    const squaredNumbers: IHash = {}

    secondArray.forEach((num) => {
        squaredNumbers[num * num] = squaredNumbers[num * num] + 1 || 1
    })

    for (var i = 0; i < firstArray.length; i++) {
        const numSquared = firstArray[i] * firstArray[i];
        if (numSquared in squaredNumbers) {
            const count = squaredNumbers[numSquared];
            if (count === 0) {
                return false
            } else {
                squaredNumbers[numSquared] = squaredNumbers[numSquared] - 1
            }
        }

    }
    return true;
}

//Optimal Solution
const optimalSame = (arr1: number[], arr2: number[]) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1: IHash = {}
    let frequencyCounter2: IHash = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        const keySquared: number = Number(key) ** 2;
        if (!((keySquared) in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[keySquared] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}

console.log(same([1, 2, 3], [4, 1, 9]))
console.log(same([1, 2, 3], [1, 9]))
console.log(same([1, 2, 1], [4, 4, 1]))

console.log(optimalSame([1, 2, 3], [4, 1, 9]))
console.log(optimalSame([1, 2, 3], [1, 9]))
console.log(optimalSame([1, 2, 1], [4, 4, 1]))