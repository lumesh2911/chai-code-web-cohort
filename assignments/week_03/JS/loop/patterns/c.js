for (let i = 1; i <= 5; i++) {
  let row = " ";
  for (j = 5; j >= i; j--) {
    row = row + "*";
  }
  console.log(row);
}
