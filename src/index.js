const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '' : ' ',
};

function decode(expr) {
    let arr = expr.split('');
  arr = splitString(arr.join(''), 2)
  
  for (variable in arr){
    if (arr[variable] === '10') {
    arr[variable] = '.'
    }
    else if (arr[variable] === '11') {arr[variable] = '-'}
    else arr[variable] = ' '
  }
  arr = splitString(arr.join(''), 5)
  for (variable in arr){
    arr[variable] = arr[variable].trim()
  }
  let res = ''
  for (variable in arr){
    res += MORSE_TABLE[arr[variable]]
  }

    return res
}
function splitString(str, N) {
    const arr = [];
  
    for (let i = 0; i < str.length; i += N) {
      arr.push(str.substring(i, i + N));
    }
  
    return arr;
  }

module.exports = {
    decode
}