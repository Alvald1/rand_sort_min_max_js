function rand() {
  return Math.floor(Math.random() * 100); //диапозон
}
function newArr(arr) {
  let tmp = [];
  for (let t of arr) {
    tmp.push(t);
  }
  return tmp;
}
function d_sort(tmp) {
  for (let i = 0; i < tmp.length; ++i) {
    let imax = i;
    for (let j = i + 1; j < tmp.length; ++j) {
      if (tmp[j] > tmp[imax]) imax = j;
    }
    let tmp_n = tmp[i];
    tmp[i] = tmp[imax];
    tmp[imax] = tmp_n;
  }
  return tmp;
}
function findMinMax(arr) {
  (min = arr[0]), (max = arr[0]);
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
}
function chek(num) {
  for (let tmp of arr) {
    if (num == tmp) return false;
  }
  return true;
}
var arr = [];
for (let i = 0; i < 10; ++i) {
  //кол-во элементов в массиве
  let tmp = rand();
  while (chek(tmp) != true) {
    tmp = rand();
  }
  arr.push(tmp);
}
console.log(arr);
let min, max;
findMinMax(arr);
console.log(min, max);
let tmp_arr = newArr(arr);
console.log(arr.sort((a, b) => a - b));
console.log(d_sort(tmp_arr));
