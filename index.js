// Task #1
const generateArray = (length, max) =>
  [...new Array(length)].map(() => Math.round(Math.random() * max));
const newArr = generateArray(5, 30); // generate aray length 5 numbers
const out_arr = document.getElementById("app"); // display element by id
out_arr.innerHTML = ' Here the random numbers array: ' + 
newArr; // display an array
//console.log(newArr);
const reversedArr = newArr.reverse();
//console.log(reversedArr);
const out_rvsd = document.getElementById("rvsd");
out_rvsd.innerHTML = ' Here the reversed array: ' +
reversedArr; //display reversed array
//Task #2
let Arr = [-1, 2,-5,6,-9];
const out_array = document.getElementById("for");
out_array.innerHTML = "Here the original array" +
Arr;


function sortArray(arr) {
  return arr.sort(((a, b) => a - b));
}
const sortedArr = sortArray(Arr);
const out_sorted =document.getElementById("sorted");
out_sorted.innerHTML = "Here the sorted array" + 
sortedArr;