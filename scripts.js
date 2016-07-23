
function repeatStringNumTimes(str, num) {
  var mystr="";
if(num<0){
  mystr="";
}else{
  for (var i = 0; i <num-1; i++) {
    mystr+=str;
    console.log(mystr);
  }
}
  return mystr;
}
