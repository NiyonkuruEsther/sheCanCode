const colors = ["red", "green", "blue", "yellow", "orange"];

// Using the join() method, create a string that joins all elements of the colors array into a single string separated by commas.
const join = colors.join(",");
console.log(join, "...Join");

// Apply the splice() method to remove the second and third elements from the colors array and replace them with 'purple' and 'pink'.
const clonedColorsForSlice = [...colors]; 
const splice = clonedColorsForSlice.splice(1, 2, "purple", "pink");
console.log(splice, "...Splice");

// Utilize the copyWithin() method to copy the elements from index 1 to index 3 within the colors array to index 0.
const clonedColors = [...colors]; 
const copyWithin = clonedColors.copyWithin(0, 1, 4);
console.log(copyWithin, "...Copy within");

// Finally, transform all elements of the colors array to uppercase using the toUpperCase() method.
const toUpperCase = colors.map((color) => color.toLocaleUpperCase());
console.log(toUpperCase, "...To uppercase");

// Apply the find() method to find the first element in the colors array that starts with the letter 'b'.
const find = colors.find((color) => color.startsWith("b"));
console.log(find, "...Find", colors);

// Apply the slice() method to create a new array selectedColors containing the elements from index 1 to index 3 (inclusive) from the colors array.
const slice = colors.slice(1, 4);
console.log(slice, "...Slice");
