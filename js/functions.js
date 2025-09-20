function lenStr(str, maxlength)  {
  if (str.length <= maxlength) {
    return true;
  }
  else {
    return false;
  }
}
console.log(lenStr('проверяемая строка', 20))
console.log(lenStr('проверяемая строка', 18))
console.log(lenStr('проверяемая строка', 10))



function palimdrome(str) {
  str = str.replaceAll(' ', '');
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}

console.log(palimdrome('Лёша на полке клопа нашёл '))
