function hasContiguousSubarrayWithSum(arr, target) {
  let currentSum = arr[0]; // Initialize with the first element
  let start = 0; // Start index of the subarray

  for (let i = 1; i <= arr.length; i++) {
    // Remove elements from the beginning until currentSum <= target
    while (currentSum > target && start < i - 1) {
      currentSum -= arr[start];
      start++;
    }

    // If currentSum equals the target, we found a subarray
    if (currentSum === target) {
      return true;
    }

    // Add the next element to currentSum
    if (i < arr.length) {
      currentSum += arr[i];
    }
  }

  return false; // No subarray found
}

// Example usage
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasContiguousSubarrayWithSum(arr, target)); 

// Output will be true because the currentSum will be equal to the target
