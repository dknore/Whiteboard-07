'use strict';

function tally(str) {
  let mostWords = {};
  if(str.length === 0) {
    return false;
  }
  let words = str.split(' ');
  for(let i = 0; i < words.length; i++) {
    if(mostWords[i] === undefined) {
      mostWords[i] = 0;
      mostwords[i]++;
    }
    let highKey = null;
    let highValue = 0;
    
    for(key in mostWords) {
      if(mostWords[key] > highValue) {
        highValue = mostWords[key];
        highKey = key;
      }
      return highKey;
    }
  }
}