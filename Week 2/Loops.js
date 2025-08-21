
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const evenNumbers = [];

// Creating a for loop that goes through the array
for (number of numbers) {
    console.log(number);
    let newNumber = number + 5;
    if (newNumber % 2 === 0) {
        console.log("New number is even, this number is", newNumber)
        evenNumbers.push(newNumber);
    }
    console.log()
}

console.log(evenNumbers);


// Data we'll be working on
const employees = [
     {name: "John Doe", salary: 60000, department: "marketing"},
     {name: "Alice Cooper", salary: 75000, department: "engineering"},
     {name: "Seamus Finnigan", salary: 85000, department: "logistics"}
]

let totalSalary = 0;

// Going through all the elements of the array and adding the salary
for (employee of employees) {
    console.log(employee.name);
    totalSalary += employee.salary;
}

// Outputting the average salary
console.log("The average salary", totalSalary / employees.length);