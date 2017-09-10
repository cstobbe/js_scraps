var favoriteCat = 'meow'

function returnFavoriteCat (favoriteCat) {
  if (favoriteCat === 'Calico') {
    return 'Catloaf';
  } else if (favoriteCat === 'Tabby') {
    return 'houseCat'
  } else {
    return 'Sooooo so so so soooo ded';
  }
}

console.log(returnFavoriteCat(favoriteCat))

/*console.log(Math.random());*/

/* to display a While loop
var result = 1;
var counter = 0;
while (counter < 10){
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
*/

/*looping a triangle exercise from page 37 in Eloquent JS
for (var line = '#'; line.length<8; line +='#')
console.log(line);*/

/*fizz buzz exescise from page 38 Eloquent JavaScript
for (var n=1; n <=100; n++) {
  var output = "";
  if (n % 3 == 0)
  output += "fizz";
  if (n%5 == 0)
  output += "buzz";
    console.log(output || n);
}*/

/*recursion example from Eloquent JS p 51)*/

function findSolution(target) {
  function find(start,history){
    if (start == target)
    return history;
    else if (start>target)
    return null;
    else
      return find( start + 5, "(" + history +" +5)") ||
            find(start * 3, "("+ history + " *3)");
  }
  return find(1,"1");
}

  console.log(findSolution(24));
