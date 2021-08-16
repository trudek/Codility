function solution(X, Y, D) {
  const startPos = X;
  const endPos = Y;
  const step = D;
  const diff = endPos - startPos;
  let jumps = 0;
  if (diff % step == 0) {
    jumps = diff / step;
  } else {
    jumps = Math.ceil(diff / step);
  }
  return jumps;
}
