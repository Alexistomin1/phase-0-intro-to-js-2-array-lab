const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(catName) {
    cats.push(catName);
}
function destructivelyPrependCat(catName) {
    cats.unshift(catName);
}
function destructivelyRemoveLastCat(catName) {
    cats.pop(catName);
    }
function destructivelyRemoveFirstCat(catName) {
    cats.shift(catName);
}
function appendCat(catName) {
  const newArray = [ ...cats, catName];
    
  return newArray
}
function prependCat(catName) {
    const newArray = [ catName, ...cats];
      
    return newArray
  }
function removeLastCat(catName) {
    const newArray = [ ...cats];
    newArray.pop();

    return newArray
}
function removeFirstCat(catName) {
    const newArray = [ ...cats];
    newArray.shift();
    return newArray
}