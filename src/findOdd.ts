export const findOdd = (xs: number[]): number => {
  // if number appears once that is odd
  let target = 0;
  const unique = xs.find((number, index, array) => array.indexOf(number) === array.lastIndexOf(number));
  // if there is not a number that appears only once find a number that appears an odd number of times
  xs.forEach(e => {
    const occurrences = xs.filter(number => number === e).length;
    const oddTimes = occurrences % 2 !== 0
    if(oddTimes) return target = e;
  });

  
  return unique || target;
};
