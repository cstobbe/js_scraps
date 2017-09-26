//Chapter 1 Exercises page 31
//var number = 0;
//while (number<=12) {
  //console.log(number);
  //number = number + 2;
//}

//page 32
//var result = 1;
//var counter = 0;
//while (counter<10) {
  //result = result*2;
  //counter = counter + 1;
//}
//console.log(result);

//Chapter 2 Exercise 1

for (var line="#";line.length<8;line +="#")
  console.log(line);

//Chapter 2 FizzBuzz exercise
for (var n=1;n<=100; n++){
  var output = "";
  if (n %3  == 0)
    output +="fizz";
  if (n % 5 == 0)
    output +="buzz";

  console.log(output || n);
}

// Chapter 2 Chess Board Exercise
var size=8;
var board=" ";
  for (var y=0;y<size;y++){
    for (var x=0; x<size;x++){
    if((x+y)% 2 == 0)
      board +=" ";
    else
      board+="#";
    }
    board +="\n";
  }

console.log(board);//

//Chapter 3 Exercises
function min (a,b){
  if (a<b)
    return a;
    else return b;
}

console.log(min(34,56));

//Chapter 3 Recursion example
function isEven(n){
  if (n==0)
    return true;
  if (n==1)
    return false;
  else if (n<0)
    return isEven(-n);
  else
    return isEven(n-2);
  }

console.log(isEven(-1));

//Chapter 3 Bean Counting example
function countChar (string,ch) {
  var counted = 0;
for (var i = 0;i < string.length;i++)
  if (string.charAt(i) == ch)
    counted +=1;
    return counted;
}
function countBs(string){
  return countChar(string, "B");
}

console.log(countBs("BBB"));
console.log(countChar("keepkeehng","k"));
