//DATA1
var markMass1=78;
var markHeight1= 1.69;
var johnMass1= 92;
var johnHeight1=1.95;

var markBMI1= (markMass1/(markHeight1*markHeight1));
var johnBMI1= (johnMass1/(johnHeight1*johnHeight1));

var markHigherBMI1 = markBMI1 > johnBMI1;

console.log("Data 1: Mark's BMI = " + markBMI1.toFixed(2) + ", John's BMI = " + johnBMI1.toFixed(2));
console.log(" " + markHigherBMI1);

//DATA2

var markMass2 = 95; 
var markHeight2 = 1.88; 
var johnMass2 = 85; 
var johnHeight2 = 1.76; 

var markBMI2 = markMass2 / (markHeight2 * markHeight2);
var johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

var markHigherBMI2 = markBMI2 > johnBMI2;

console.log("Data 2: Mark's BMI = " + markBMI2.toFixed(2) + ", John's BMI = " + johnBMI2.toFixed(2));
console.log("  " + markHigherBMI2);



