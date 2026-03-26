/*
Write some code that converts modern decimal numbers into their Roman number equivalents.

The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. 
They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. 
This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. 
For example the BBC uses Roman numerals to date their programmes.

The Romans wrote numbers using letters - I, V, X, L, C, D, M. 
Notice that these letters have lots of straight lines and are hence easy to hack into stone tablets.
*/

class RomanNumeral {
  static SYMBOLS = Object.freeze({
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  })
  
  static MAX_REPS = 3;

  static DIVISORS = Object.keys(this.SYMBOLS)
    .map(value => Number(value))
    .sort((a, b) => b - a);

  constructor(decimal) {
    this.decimal = decimal;
  }

  toRoman() {
    let outputStr = '';
    let currNum = this.decimal;

    for (let i = 0; i < RomanNumeral.DIVISORS.length && currNum > 0; i += 1) {
      let currDivisor = RomanNumeral.DIVISORS[i];
      let currSymbol = RomanNumeral.SYMBOLS[currDivisor];
      let currQuotient = Math.floor(currNum / currDivisor);
      
      if (currSymbol.length === 2 && currQuotient >= 1) {
        outputStr += currSymbol;
        currNum -= currDivisor;
        continue;
      }

      if (currQuotient >= 1 && currQuotient <= RomanNumeral.MAX_REPS) {
        outputStr += currSymbol.repeat(currQuotient);
        currNum -= (currDivisor * currQuotient);
      }
    }

    return outputStr;
  }
}

module.exports = RomanNumeral;