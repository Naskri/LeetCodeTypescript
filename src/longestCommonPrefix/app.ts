function longestCommonPrefix(strs: string[]): string {
  let longestPrefix = "";
  let isValid = true;

  for (let i = 0; i < strs[0].length; i++) {
    if (!isValid) break;

    longestPrefix += strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      console.log(strs[i]);

      if (!strs[j].startsWith(longestPrefix)) {
        isValid = false;
        longestPrefix = longestPrefix.slice(0, -1);
      }
    }
  }
  return longestPrefix;
}
