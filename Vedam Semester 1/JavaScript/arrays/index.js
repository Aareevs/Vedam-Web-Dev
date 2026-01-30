// Arrays in JS
let marks = [10, 20, 30, 40, 50]
console.log("Array: " + marks)

//accessing elements in an array
console.log(marks[0])
let n = marks.length
console.log(marks[n-1])

//modifying elements in an array
marks.push(40)
console.log("Marks after push: ",marks)

//removing elements from an array
marks.pop()
console.log("Marks after pop: ",marks)

//adding elements to the beginning of an array
marks.unshift(100)
console.log("Marks after unshift: ",marks)

//removing the first element from an array
marks.shift()
console.log("Marks after shift: ",marks)

//printing all elements in an array using for loop
for(let i = 0; i < marks.length; i++){
    console.log(marks[i])
}

//Searching for an element in an array
console.log("Index of 30: ",marks.indexOf(30))
console.log("Index of 100: ",marks.indexOf(100))
console.log("Index of 50: ",marks.indexOf(50))

//Object in JS
let student = {
    name: "Aareev",
    age: 18,
    city: "Pune",
    class: "1st Year",
    marks: {
        math: 90,
        science: 80,
        english: 70
    }
}
console.log(student)
console.log(student.marks.math)
console.log(student["marks"]["science"])

