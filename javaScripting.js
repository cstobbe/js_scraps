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

var result = 1;
var counter = 0;
while (counter < 10){
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
