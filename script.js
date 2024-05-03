const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);
  const median =
    array.length % 2 === 0
      ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
      : sorted[Math.floor(array.length / 2)];
  return median;

  /* const length = sorted.length;

  if (length % 2 === 0) {
    const median = length / 2;
    const median1 = sorted[median - 1];
    const median2 = sorted[median];
    return getMean([median1, median2]);
  } else {
    const median = Math.floor(length / 2);
    return sorted[median];
  } */
};

const getMode = (array) => {
  const counts = {};
  array.forEach((el) => (counts[el] = (counts[el] || 0) + 1));
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );
  return mode.join(', ');
};

const calculate = () => {
  const value = document.querySelector('#numbers').value;
  const array = value.split(/,\s*/g);
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));

  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  document.querySelector('#mean').textContent = mean;
  document.querySelector('#median').textContent = median;
  document.querySelector('#mode').textContent = mode;
};

/* const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];
const isEven = testArr2.length % 2 === 0;
console.log(isEven);
const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
console.log(oddListMedian);
const evenListMedian = getMean(testArr2);
console.log(evenListMedian); */
