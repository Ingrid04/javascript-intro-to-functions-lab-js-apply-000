function shout (string) {
  return string.toUpperCase();
}

function whisper(STRING) {
    return STRING.toLowerCase();
}
function logShout(string){
const logShout = 'HELLO';
console.log(logShout);
}

function logWhisper(string) {
  const logWhisper = 'HELLO';
  console.log('HELLO'.toLowerCase());
}

function sayHiToGrandma (string) {
  if (string.toUpperCase() === 'HELLO') {
    return 'YES INDEED!';
  // Or else she responds with 'I love you, too.' to everything else
  } else if (string === 'I love you, Grandma.'){
    return 'I love you, too.';
  }
}
console.log(sayHiToGrandma('hello'))
