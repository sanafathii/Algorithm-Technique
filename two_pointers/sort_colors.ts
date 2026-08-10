function sortColors(nums: number[]): void {
  let right = nums.length - 1;
  let left = 0;
  let min = 0;
  let temp;

  while (min <= right) {
    if (nums[min] === 0) {
      temp = nums[left];
      nums[left] = nums[min];
      nums[min] = temp;
      left++;
      min++;
    } else if (nums[min] === 2) {
      temp = nums[right];
      nums[right] = nums[min];
      nums[min] = temp;
      right--;
    } else {
      min++;
    }
  }
}
