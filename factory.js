function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

//for creating factory of objects
function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
    }
  };
}

function say() {
  console.log("hi, I am " + this.name + " and I am a " + this.type);
}

const employeeFactory = new EmployeeFactory(); //using factory class
const employees = []; //database for employees

employees.push(employeeFactory.create("Patrick", 1));
employees.push(employeeFactory.create("John", 2));
