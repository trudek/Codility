function solution(N) {
  let binaryNo = N.toString(2);
  let gaps = [];
  let count = 0;
  for (let i = 0; i <= binaryNo.length - 1; i++) {
    if (binaryNo[i] == 1) {
      gaps.push(count);
      count = 0;
    } else {
      count++;
    }
  }
  if (gaps.length <= 1) {
    return 0;
  } else {
    return Math.max(...gaps);
  }
}
