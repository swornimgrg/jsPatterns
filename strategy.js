function Fedex() {
  //strategy
  this.calculate = (package) => {
    //fedex calculations...
    return 2.45;
  };
}

function UPS() {
  //strategy
  this.calculate = (package) => {
    //UPS calculations...
    return 1.56;
  };
}

function USPS() {
  //strategy
  this.calculate = (package) => {
    //USPS calculations...
    return 4.5;
  };
}

function Shipping() {
  //initialization for object reference
  this.company = null;
  this.setStrategy = (company) => {
    this.company = company;
  };
  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();
const package = { from: "Alabama", to: "Georgia", weight: 1.56 };

const shipping = new Shipping();
shipping.setStrategy(fedex);
console.log("Fedex: " + shipping.calculate(package));

shipping.setStrategy(ups);
console.log("UPS: " + shipping.calculate(package));

shipping.setStrategy(usps);
console.log("USPS: " + shipping.calculate(package));
