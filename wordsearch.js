const wordSearch = (letters, word) => {
  let newLetterArr = []; //new letter array is the transposed array
  // vertical iteration:
  for (let i = 0; i < letters[0].length; i++) {
    let emptyArr = [];
    newLetterArr.push(emptyArr);
    for (let p = 0; p < letters.length; p++) {
      newLetterArr[i][p] = letters[p][i];
    }
  }
  const verticalJoin = newLetterArr.map((vls) => vls.join(""));
  for (let l of verticalJoin) {
    //loops through the lines of arrays of vertical join
    if (l.includes(word)) {
      return true; //the letter includes word return true
    }
  }
    
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;