var employees = []

function Employee(name, jobtitle, salary, status) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.printEmployeeForm = function printEmployeeForm() {
        return "Name: " + this.name + "Job Title: " + this.jobtitle + "Salary: " + this.salary + "Status: " + this.status
    };
    this.salary = salary;

    if (status === undefined) {
        this.status = "Fulltime"
    } else {
        this.status = status
    }
}

var bob = new Employee("Bob", "V School Instructor", "$3000/hr")

console.log(bob.printEmployeeForm())