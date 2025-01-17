function combine<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const result = combine([1, 2, 3], [4, 5, 6]);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]

const result2 = combine(["a", "b"], ["c", "d"]);
console.log(result2); // Output: ["a", "b", "c", "d"]