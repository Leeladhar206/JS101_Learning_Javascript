let num1= 150;
let num2= 100;
let num3= 300;
if((num1>num2) && (num1>num3)){
  console.log("num1 is greater");
}
else if((num2>num3) && (num2>num1)){
  console.log("num2 is greater");
}
else if((num3>num1)&&(num3>num2)){
  console.log("num3 is greater");
}
else{
  console.log("All three numbers are Eqaul")
}