//Abbreviate a two word name

/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot seperating them.
It should look like this:

Sam Harris => S.H
Patrick Feeney => P.F
*/

function abbrevName(name){
  let arr = name.split(' ');
  let firstname = arr[0];
  let surname = arr[1];
  let result = firstname[0] + '.' + surname[0].toUpperCase();

  return result;
}
