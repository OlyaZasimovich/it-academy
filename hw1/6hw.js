'use strict';
{
  let sizeArrayFunction = (N=1, M=20) => (Math.floor(Math.random() * (M - N + 1)) + N);
  const sizeArray = sizeArrayFunction();

  let createArr = (s) => {
  let arr = [];
  for (let i = 0; i < s; i++) {
    arr[i] = i+1;
  }
  return arr;
};
  let array = createArr(sizeArray);
  console.log("old array: " ,array);

  function changePlace(a) {

    var len = a.length;
    if (a.length < 4) {
      return a;
    }
    for (let i = 0, half = Math.floor(a.length/2),quarter = Math.floor(a.length/4), even = a.length % 2; i<quarter; i++ ) {
      const tempLeft = a[i];
      a[i] = a[half-i-1];
      a[half-i-1] = tempLeft;
      const tempRight = a[i+half+even];
      a[i+half+even] = a[a.length-1-i];
      a[a.length-1-i] = tempRight;
    }
    return a;
  }

  console.log("new array: " , changePlace(array));
}