function solution(A, K) {
  if (A.length == 0) {
    let array = [];
    return array;
  } else {
    let array = A;
    for (let i = 0; i < K; i++) {
      let last = array.pop();
      array.unshift(last);
    }
    return array;
  }
}
