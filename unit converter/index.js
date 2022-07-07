let text= document.getElementById("textbox");
let length= document.getElementById("length");
let volume= document.getElementById("volume");
let mass= document.getElementById("mass");
let convert= document.getElementById("convert");

let sentenceOne=""
let sentenceTwo=""
let sentenceThree="" 

function lengthValue(){
    let feet= text.value * 3.281
    const feetDec = feet.toFixed(2);
    let meter= text.value/ 3.281
    const meterDec = meter.toFixed(2);
     sentenceOne= `${text.value} meters= ${feetDec} feet | ${text.value} feet= ${meterDec} meters`
    
    length.textContent= sentenceOne;
    return sentenceOne 
} 

function volumeValue(){
    let kilo= text.value * 0.4535
    const kiloDec = kilo.toFixed(2);
    let pound= text.value/ 0.4535
    const poundDec = pound.toFixed(2);
     sentenceTwo= ` ${text.value} kilograms= ${poundDec} pounds | ${text.value} pounds= ${kiloDec} kilograms `

    volume.textContent= sentenceTwo;
    return sentenceTwo
} 


function massValue(){
    let liter= text.value * 4.55
    const literDec = liter.toFixed(2);
    let gallon= text.value / 4.55
    const gallonDec = gallon.toFixed(2);
     sentenceThree= `${text.value} liters= ${gallonDec} gallons  | ${text.value} gallons= ${literDec} liters`
    
    mass.textContent= sentenceThree
    return sentenceThree 
} 

convert.addEventListener("click", function(){
   alert(lengthValue())
   alert(volumeValue())
   alert(massValue())
} ) 
 