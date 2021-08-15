function solution(A) {
  const sortedArray = A.sort();
  let reapeted = 0;

  for (let i = 0; i < sortedArray.length; i++) {
    let thisNo = sortedArray[i];
    let nextNo = sortedArray[i + 1];

    if (thisNo === nextNo) {
      i++;
    } else {
      reapeted = thisNo;
    }
  }
  return reapeted;
}
