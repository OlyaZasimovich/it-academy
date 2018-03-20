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
    console.log(len);
    if (a.length === 1) {
      return a;
    }

    if (a.length < 4) {
      const temp = a[0];
      a[0] = a[a.length - 1];
      a[a.length - 1] = temp;
      return a;
    }
    for (let i = 0, half = Math.floor(a.length/2), even = a.length % 2; i<half; i++ ) {
      const temp = a[i];
      const index = half + even + i;
      a[i] = a[index];
      a[index] = temp;
    }
    return a;
  }

  console.log("new array: " , changePlace(array));
}