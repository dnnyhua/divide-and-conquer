function findFloor(arr, num) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx < rightIdx) {

        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[arr.length - 1] < num)
            return arr[arr.length - 1]
        else if (arr[0] > num)
            return -1;
        if (arr[middleIdx] > num) {
            rightIdx = middleIdx;
            if (arr[rightIdx - 1] < num)
                return arr[rightIdx]
            rightIdx--;
        } else if (arr[middleIdx] < num) {
            leftIdx = middleIdx;
            if (arr[leftIdx + 1] > num)
                return arr[leftIdx]
            leftIdx++;
        }
    }

}

module.exports = findFloor