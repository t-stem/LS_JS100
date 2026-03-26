Write some code that converts modern decimal numbers into their Roman number equivalents.

The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. 
They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. 
This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. 
For example the BBC uses Roman numerals to date their programmes.

The Romans wrote numbers using letters - I, V, X, L, C, D, M. 
Notice that these letters have lots of straight lines and are hence easy to hack into stone tablets.

There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

Wikipedia says: Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.

To see this in practice, consider the example of 1990. In Roman numerals, 1990 is MCMXC:


# PROBLEM
## Inputs
- Modern decimal number

## Outputs
- Roman number equivalent

## Explicit rules
- no need to be able to convert numbers larger than about 3000.

## Implicit rules
- Each symbol can only occur three times in a row (as an addition);
- Afterwards, it will be prepended to the next symbol (as a subtraction)
- Combinations of symbols are listed in descending order

## Questions
-

# EXAMPLES/TEST CASES


# DATA STRUCTURES
- Symbols {value: symbol}
- Divisors [values] sorted desc

# ALGORITHM
- SET outputStr to empty string
- SET currNum = decimal

- LOOP through divisors
  - IF length of currDivisor symbol equals 2 AND currNum / currDivisor >= 1
      CONCAT currDivisor symbol to outputStr
      SET currNum = currNum - currDivisor
      Go to next iteration
  - SET quotient = quotient of dividing currNum by currDivisor
  - IF quotient <= 0
      Go to next divisor
    ELSE IF quotient <= 3
      CONCAT divisor symbol to outputStr, quotient times
      SET currNum = currNum - quotient * currDivisor

# CODE