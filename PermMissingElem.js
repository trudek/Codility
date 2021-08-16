// function solution(A) {
//   const list = [];
//   for (let i = 1; i <= A.length + 1; i++) {
//     list.push(i);
//   }
//   for (let i = 0; i < A.length; i++) {
//     list.splice(list.indexOf(A[i]), 1);
//   }
//   return list[0];
// }

function solution(A) {
  const n = A.length;
  let sum = ((n + 1) * (n + 2)) / 2;
  for (let i = 0; i < n; i++) {
    sum -= A[i];
  }
  return sum;
}
