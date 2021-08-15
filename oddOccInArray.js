function solution(A) {
  let array = A;
  let unpaired = 0;
  for (let i = 0; i < A.length; i++) {
    let number = array[i];
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if (i != j) {
        let compareNo = array[j];
        if (number == compareNo) {
          count++;
        }
      }
    }
    if (count % 2 == 0) {
      unpaired = array[i];
    }
  }
  return unpaired;
}
