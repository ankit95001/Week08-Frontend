let inches = 42;
let feet = inches / 12;
console.log("42 inches in feet:", feet);

let lengthFeet = 60;
let widthFeet = 40;
let feetToMeter = 0.3048;
let areaMeters = (lengthFeet * feetToMeter) * (widthFeet * feetToMeter);
console.log("Rectangular Plot in meters:", areaMeters, "sq meters");

let oneAcreInSqMeters = 4046.86;
let totalAreaInAcres = (areaMeters * 25) / oneAcreInSqMeters;
console.log("Total Area of 25 Plots in Acres:", totalAreaInAcres);