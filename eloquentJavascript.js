/*Chapter 1 Exercises*/
/*page 31
var number = 0;
while (number<=12) {
  console.log(number);
  number = number + 2;
}

/*page 32
var result = 1;
var counter = 0;
while (counter<10) {
  result = result*2;
  counter = counter + 1;
}
console.log(result);*/

/*Chapter 2 Exercise 1

for (var line="#";line.length<8;line +="#")
  console.log(line);*/

/*Chapter 2 FizzBuzz exercise
for (var n=1;n<=100; n++){
  var output = "";
  if (n %3  == 0)
    output +="fizz";
  if (n % 5 == 0)
    output +="buzz";

  console.log(output || n);
}*/

/* Chapter 2 Chess Board Exercise*/
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

console.log(board);
