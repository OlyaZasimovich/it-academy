 {
   let str = prompt("Введите строку");
   let counter = 0;
   if (!str) {
     str = prompt("Введите строку еще раз");
   }

   function vowelsStr(text) {
     text.toLowerCase();
     let result = text.match( /[аоиеёэюяуы]/gim );
     return result.length;
   }
   console.log(vowelsStr(str));
 }
