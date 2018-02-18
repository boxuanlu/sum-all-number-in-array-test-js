function sumItems(array) {
  // Sum all the numbers in the array
  sum = 0;
  array.forEach(number){
    if(Array.isArray(number)){
      sum += sumItems(number);
    } else {
      sum += number;
    }
  }
  return sum;
}

module.exports = sumItems;
