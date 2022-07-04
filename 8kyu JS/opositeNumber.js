// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

//resolução:

function opposite(number) {
    return (number *= -1)
  }

//poderia ser;

const opposite = number => -number;

//tambem: 

function opposite(number) {
    return(-number);
  }