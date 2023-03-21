function countUniqueValues(arr){
    if(arr.length < 2) {
        return arr.length;
    }
    let i = 0;
    let j = 1;

    while(j < arr.length) {
        if(arr[i] === arr[j]) {
            j++;
        } else {
            arr[i+1] = arr[j];
            i++;
            j++;
        }
    }

    return i + 1;
}

console.log(countUniqueValues([1,1,1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4

//Optimal Solution
function optimalCountUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])