const myList = ['a', 'b', 'c'];
const myList2 = [1, 2, 3];

function zipList(list, list2) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(list[i], list2[i]);
  }
  return result;
}
console.log(zipList(myList, myList2));

function zipListTheSimpleWay(list, list2) {
  return _.flatten(_.zip(list, list2));
}
console.log(zipListTheSimpleWay(myList, myList2));
