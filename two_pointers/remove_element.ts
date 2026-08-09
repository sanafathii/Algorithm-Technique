function removeElement(nums: number[], val: number): number {
  let right = nums.length - 1;
  let left = 0;

  while (left <= right) {
    while (left <= right && nums[left] !== val) {
      left++;
    }

    if (left > right) {
      break;
    }

    while (left <= right && nums[right] === val) {
      right--;
    }

    if (left > right) {
      break;
    }

    const plate = nums[left];
    nums[left] = nums[right];
    nums[right] = plate;

    left++;
    right--;
  }

  return left;
}
