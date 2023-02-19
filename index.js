// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
cats.push(name)
}
function destructivelyPrependCat(name) {
  cats.unshift(name)  
}
function destructivelyRemoveLastCat(name) {
cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}
function appendCat(name) {
    return [...cats,name]
}
function prependCat(name) {
return [name,...cats]
}
function removeLastCat(name) {
  const  copyofcats = [...cats];
  copyofcats.pop(name)
  return copyofcats
}
function removeFirstCat(name) {
    const copyofcats = [...cats];
    copyofcats.shift(name)
    return copyofcats
}