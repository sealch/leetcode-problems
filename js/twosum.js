var twoSum = function(nums, target) {
  const numsObj = nums.map((el, i) => {
    return {
      index: i,
      value: el
    }
  });
  numsObj.sort((a, b) => a.value - b.value);

  var a = 0;
  var b = nums.length - 1;

  while (a < b) {
    let sum = numsObj[a].value + numsObj[b].value;
    if (sum == target) {
      return [numsObj[a].index, numsObj[b].index];
    }
    if (sum < target) {
      a++;
    } else {
      b--;
    }
  }
};