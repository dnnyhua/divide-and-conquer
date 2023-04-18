function sortedFrequency(arr, num) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx < rightIdx) {
        if (arr[leftIdx] > num || arr[rightIdx] < num) {
            return -1
        }

        leftIdx = getLeftIdx(arr, leftIdx, num);
        rightIdx = getRightIdx(arr, rightIdx, num);

        return rightIdx - leftIdx + 1;
    }
}

const getLeftIdx = (arr, lastIdx, num) => {
    while (arr[lastIdx] != num) {
        lastIdx++
    }
    return lastIdx
}

const getRightIdx = (arr, rightIdx, num) => {
    while (arr[rightIdx] != num) {
        rightIdx--;
    }
    return rightIdx
}

module.exports = sortedFrequency