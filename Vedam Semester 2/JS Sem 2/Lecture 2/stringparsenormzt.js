let searchQuery = "Learn Javascript Functions Arrow IIFE";

//1 Trim the input string and print the cleaned value and its length
let trimmedQuery = searchQuery.trim();
console.log(trimmedQuery);
console.log(trimmedQuery.length);

//2 Convert the cleaned string to lowercase and uppercase
console.log(trimmedQuery.toLowerCase());
console.log(trimmedQuery.toUpperCase());

//3 Extract the word 'JavaScript' using substring() and slice()
console.log(trimmedQuery.substring(6, 16));
console.log(trimmedQuery.slice(6, 16));

//4 Check whether the query contains: functions, arrow, and iife
console.log(trimmedQuery.includes("Functions")); 
console.log(trimmedQuery.includes("Arrow"));
console.log(trimmedQuery.includes("IIFE"));

//5 Print the character at index 6 and the ASCII value of the first character
console.log(trimmedQuery.charAt(6));
console.log(trimmedQuery.charCodeAt(0));

//6 Perform a case-insensitive check for the word 'javascript'
console.log(trimmedQuery.toLowerCase().includes("javascript"));