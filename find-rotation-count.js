function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx < rightIdx) {

        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

        if (arr[leftIdx] < arr[rightIdx])
            return 0;
        if (arr[middleIdx] < arr[leftIdx])
            rightIdx = middleIdx;
        else if (arr[middleIdx] > arr[rightIdx])
            leftIdx = middleIdx + 1;
    }

    return rightIdx;
}

module.exports = findRotationCount