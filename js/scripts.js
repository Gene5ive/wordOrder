var wordOrder = function(sentence) {
  var words = sentence.split(" ");
  var wordSet = {};

  var keys = Object.keys(wordSet);

  words.forEach(function(word) {


    keys.forEach(function(key) {
      if (word === key) {
        wordSet[word] ++;
      } else {
        wordSet[word] = 1;
      }
    });
  });
  return wordSet;
};
