function Bol(a, b, c) {
  let ar = a;
  let br = b;
  let cr = c;

  for (i = 1; i > 0; i++) {
    if (ar * br > cr) {
      res += 2;
    } else break;
  }
  return i;
}
