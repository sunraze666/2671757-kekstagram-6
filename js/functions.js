function lenStr(str, maxlength)  {
  if (str.length <= maxlength) {
    return true;
  }
  else {
    return false;
  }
}
// Cтрока короче 20 символов
console.log(lenStr('проверяемая строка', 20))
// Длина строки ровно 18 символов
console.log(lenStr('проверяемая строка', 18))
// Строка длиннее 10 символов
console.log(lenStr('проверяемая строка', 10))


function palimdrome(str) {
  str = str.replaceAll(' ', '');
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}

console.log(palimdrome('Лёша на полке клопа нашёл '))
