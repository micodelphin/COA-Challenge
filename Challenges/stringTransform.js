function transformString(input) {
  const length = input.length;

  // Rule 1: If divisible by 3, reverse the entire string
  if (length % 3 === 0) {
    return input.split("").reverse().join("");
  }

  // Rule 2: If divisible by 5, replace each character with its ASCII code
  if (length % 5 === 0) {
    return input
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  // Rule 3: If divisible by 15, perform both operations
  if (length % 15 === 0) {
    const reversed = input.split("").reverse().join("");
    return reversed
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  // No transformation needed
  return input;
}

// this will be the Output according to the condition

console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"


