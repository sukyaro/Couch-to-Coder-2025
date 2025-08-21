
const employee = {
    firstName: "Hannah",
    lastName: "Adewumi",
    occupation: "Architect",
    salary: 35000,
    currentProjects: ["New house in Liverpool", "Skyscraper in London", "A school in Buxton"],
};

// Outputting the Object
console.log(employee);
console.log(employee["firstName"]);
console.log(employee.firstName);
console.log(employee.lastName.toUpperCase())
console.log("£" + employee.salary);
console.log("The current task to deal with is", employee.currentProjects[0])
console.log(Object.keys(employee))

// Changing the Object
employee.salary = 40000;
employee.education = "University of Liverpool";
console.log(employee.salary)
