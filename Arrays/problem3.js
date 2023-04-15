let sum=0;
let cont=0;
let num=[2,4,8,9,15,18,67,90,54,30,87];

for(let i=0;i<num.length;i++){
  if(num[i]%2 == 0){
    sum = sum+num[i];
     cont++; 
  }
  }
  console.log(sum/cont);