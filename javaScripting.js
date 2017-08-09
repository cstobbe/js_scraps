var favoriteCat = 'meow'

function returnFavoriteCat (favoriteCat) {
  if (favoriteCat === 'Calico') {
    return 'Catloaf';
  } else if (favoriteCat === 'Tabby') {
    return 'houseCat'
  } else {
    return 'Dog Person';
  }
}

console.log(returnFavoriteCat(favoriteCat))
