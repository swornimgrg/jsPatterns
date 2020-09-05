function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype = {
  getSalary: function () {
    return this.salary;
  },

  setSalary: function (sal) {
    this.salary = sal;
  },

  accept: function (visitorFunction) {
    visitorFunction(this);
  },
};

const john = new Employee("John", 10000);
console.log(john.getSalary());

function Bonus(emp) {
  emp.setSalary(emp.getSalary() + 500);
}

john.accept(Bonus);
console.log(john.getSalary());
