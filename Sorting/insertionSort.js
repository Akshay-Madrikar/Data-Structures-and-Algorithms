const insertionSort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
      let j = i - 1;
      let temp = nums[i];
      while (j >= 0 && nums[j] > temp) {
        nums[j + 1] = nums[j];
        j--;
      }
      nums[j+1] = temp;
    }
    return nums;
}

console.log(insertionSort([2,5,1,11,9,25,22]));