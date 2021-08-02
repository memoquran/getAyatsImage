// The function here takes the parameters that you
// have declared in the `glide.json` file, in the
// same order.
var fruits = ['Apple', 'Banana'];
var salary = [
  [0,0,0,0,0,1,1],
  [1,1,1,1,1,7,1],
  [2,1,1,2,1,7,2],
  [3,1,1,3,1,7,3],
  [4,1,1,4,1,7,4],
  [5,1,1,5,1,7,5],
  [6,1,1,6,1,7,6],
  [7,1,1,7,1,7,7],
  [8,2,2,1,1,5,1],
  [9,2,2,2,1,5,2],
  [10,2,2,3,1,5,3],
  [11,2,2,4,1,5,4],
];
window.function = function (str, start, end) {
  // For each parameter, its `.value` contains
  // either its value in the type you've declared,
  // or it's `undefined`.  This is a good place to
  // extract the `.value`s and assign default
  // values.
  str = str.value ?? "";
  start = start.value ?? 0;
  end = end.value;

  // Your function should return the exact type
  // you've declared for the `result` in
  // `glide.json`, or `undefined` if there's an
  // error or no result can be produced, because a
  // required input is `undefined`, for example.
  //return str.substring(start, end);
  return salary[3][5];
}
