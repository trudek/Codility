function solution(A) {
  let array = [];
  for (let i = 0; i < A.length; i++) {
    if (array.includes(A[i])) {
      array.splice(array.indexOf(A[i]), 1);
    } else {
      array.push(A[i]);
    }
  }
  let reapeted = array[0];
  return reapeted;
}
