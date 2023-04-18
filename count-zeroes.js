// function countZeroes(arr) {
//     let count = 0;

//     for (let i of arr) {
//         if (i === 0) {
//             count++
//         }
//     }
//     console.log(count)
//     return count
// }


// const a = [1, 1, 1, 1, 0, 0]

// countZeroes(a)


function countZeroes(arr) {
    // add whatever parameters you deem necessary - good luck!
    let firstZero = findFirst(arr)
    if (firstZero === -1) return 0;

    return arr.length - firstZero
}

/*
L = 0     H = 5
 
mid = 3
 
[1, 1, 1, 1, 0, 0]
 
 
 
*/

function findFirst(arr, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2)
        if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
            return mid;
        } else if (arr[mid] === 1) {
            return findFirst(arr, mid + 1, high)
        }
        return findFirst(arr, low, mid - 1)
    }
    return -1;
}


module.exports = countZeroes