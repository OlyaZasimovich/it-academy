"use strict";
{
   let str = prompt("Введите строку");
   let counter = 0;
   while (str==false) {
     str = prompt("Введите строку еще раз");
   }

   function vowelsStr(text) {
     text.toLowerCase();
     let result = text.match( /[аоиеёэюяуы]/gim );
     if (result) {
       return result.length;
     } else {
       return 0;
     }
   }
   console.log(vowelsStr(str));
 }
