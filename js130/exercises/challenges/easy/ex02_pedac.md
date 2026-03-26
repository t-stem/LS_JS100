PEDAC
Write a program that can calculate the Hamming distance between two DNA strands.

A mutation is simply a mistake that occurs during the creation or copying of a nucleic acid, in particular DNA. 
Because nucleic acids are vital to cellular functions, mutations tend to cause a ripple effect throughout the cell. 
Although mutations are technically mistakes, a very rare mutation may equip the cell with a beneficial attribute. 
In fact, the macro effects of evolution are attributable to the accumulated result of beneficial microscopic mutations 
over many generations.

The simplest and most common type of nucleic acid mutation is a point mutation, 
which replaces one base with another at a single nucleotide.

By counting the number of differences between two homologous DNA strands taken from different genomes with a common ancestor, 
we get a measure of the minimum number of point mutations that could have occurred on the evolutionary path between the two strands.

This is called the Hamming distance.

GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^

The Hamming distance between these two DNA strands is 7.

The Hamming distance is only defined for sequences of equal length. 
If you have two sequences of unequal length, you should compute the Hamming distance over the shorter length.

# PROBLEM
## Inputs
- Two DNA strings
  * Equal or unequal length

## Outputs
- Hamming distance between the two strings
  * Count of occurances when char at same index differs between the two strings

## Explicit rules
- If you have two sequences of unequal length, you should compute the Hamming distance over the shorter length.

## Implicit rules
-

## Questions
-

# EXAMPLES/TEST CASES
- no difference between empty strands RETURNS 0
- ignores extra length on original strand when longer
- ignores extra length on other strand when longer
- does not actually shorten original strand

# DATA STRUCTURES
- strings
- {index: [string1, string2]}
- 

# ALGORITHM
- IF lengths of strings are not equal
  Add strings to a sorted array
  Get length of shortest string
  Create copy of longest string
  Shorten copy to same length as shortest string
  RETURN array with same-length strings

- SET counter = 0

- LOOP through one of the strings starting at index = 0
  IF char1 at index in string1 is NOT equal to char2 at index in string2
    Increase counter by 1

# CODE