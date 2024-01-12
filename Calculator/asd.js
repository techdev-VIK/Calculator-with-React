var romanToInt = function (s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = map[s[i]],
      next = map[s[i + 1]];
    console.log(curr, next);
    if (curr < next) {
      num -= curr;
      console.log(num);
    } else {
      num += curr;
      console.log(num);
    }
  }
  return num;
};

console.log(romanToInt("MCMXCIV"));

var intToRoman = function (num) {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }

  return result;
};

// Example usage
console.log(intToRoman(3)); // Output: 'III'
console.log(intToRoman(4)); // Output: 'IV'
console.log(intToRoman(9)); // Output: 'IX'
console.log(intToRoman(58)); // Output: 'LVIII'
console.log(intToRoman(1994)); // Output: 'MCMXCIV'

let cand = [1, 2, 3, 5];

console.log(Math.max(...cand));
