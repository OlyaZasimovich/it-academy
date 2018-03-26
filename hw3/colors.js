"use strict";

function randomDiap(n,m) {
  return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
  let colors=['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
  if(colorsCount > 8) colorsCount = 8;

  console.log( 'цветов: ' + colorsCount );
  let myColors = {};

  for ( let i=1; i<=colorsCount; i++ )  {
    let n=randomDiap(1,7);
    let colorName=colors[n];
    myColors[colorName] = colorName;
  }

  for (let key in myColors) {
    console.log(myColors[key]);
  }
}

mood(7);