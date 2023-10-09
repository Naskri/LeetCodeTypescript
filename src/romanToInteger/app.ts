function romanToInt(s: string): number {
  let totalResult = 0;

  const ROMANS = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const isRomanSymbol = (
    possiblyRomanSymbol: string
  ): possiblyRomanSymbol is keyof typeof ROMANS => {
    return possiblyRomanSymbol in ROMANS;
  };

  const romanNumbers = s.split("").map((romanSymbol) => {
    if (isRomanSymbol(romanSymbol)) {
      return ROMANS[romanSymbol];
    }
    return 0;
  });

  for (let i = 0; i < romanNumbers.length; i++) {
    if (romanNumbers[i] < romanNumbers[i + 1]) {
      totalResult += romanNumbers[i + 1] - romanNumbers[i];
      i++;
    } else {
      totalResult += romanNumbers[i];
    }
  }

  return totalResult;
}
