function isPalindrome(x: number): boolean {
  let reversedNumber = 0;
  let numberToReverse = x;

  if (x < 0) return false;

  while (numberToReverse) {
    reversedNumber = reversedNumber * 10 + (numberToReverse % 10);
    numberToReverse = Math.floor(numberToReverse / 10);
  }

  return reversedNumber === x;
}
isPalindrome(345);
