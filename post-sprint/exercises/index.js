function getLastItem(array) {
  return array.pop();
}

function removeItem(array, index) {
  array.splice(index, 1);
  return array;
}

function switchKey(obj, oldKey, newKey) {
  obj[newKey] = obj[oldKey];
  delete obj[oldKey];
  return obj;
}

function joinArrays(arr1, arr2) {
  if (!arr2) return arr1;
  arr1.push(...arr2);
  return arr1;
}

function addItem(array, item) {
  if (!item) return array;
  array.push(item);
  return array;
}

function removeAges(people) {
  people.forEach(function (person) {
    delete person.age;
  });
  return people;
}

module.exports = {
  getLastItem,
  removeItem,
  switchKey,
  joinArrays,
  addItem,
  removeAges,
};
