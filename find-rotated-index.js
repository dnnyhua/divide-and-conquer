function findRotatedIndex(arr, num) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let middleIdx = -1;

    while (leftIdx < rightIdx) {

        middleIdx = Math.floor((leftIdx + rightIdx) / 2);

        if (arr[middleIdx] === num) {
            return middleIdx;
        } else if (arr[middleIdx] < num) {
            rightIdx = middleIdx;
            if (arr[rightIdx + 1] === num)
                return rightIdx + 1;
            else if (arr[rightIdx - 1] === num)
                return rightIdx - 1;
            rightIdx--;
        } else if (arr[middleIdx] > num) {
            leftIdx = middleIdx;
            if (arr[leftIdx + 1] === num)
                return leftIdx + 1;
            else if (arr[leftIdx - 1] === num)
                return leftIdx - 1;

            leftIdx++;
        }
    }

    return arr[rightIdx] == num ? rightIdx : -1;
}

module.exports = findRotatedIndex