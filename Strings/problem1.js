let avengers = "IronMan CaptainAmerica Spiderman Dr.strange Wanda Thanos";
let space=0;
for(i=0;i<=avengers.length;i++){
  if(avengers[i] ==" "){
    space++;
  }
}
console.log(space+1);