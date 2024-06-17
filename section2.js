/* find element in an array exits or not */
function findElementInArray(arr, target) {
  for (let x of arr) {
    if (target === x) {
      return true;
    }
  }
  return false;
}

// arr.includes(target);
console.log(findElementInArray([1, 2, 3, "hi"], "hi"));
//arr.indexOf(target)

function temp() {
  obj1 = { a: 10 };
  const obj2 = obj1;
  obj2.a = 20;
  console.log(obj1);
  console.log(obj2);
  let obj1;
}

temp();
