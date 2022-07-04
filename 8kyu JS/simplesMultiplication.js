// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//resolução: 

function simpleMultiplication(number) {
    if (number % 2 == 0) {
      return number*8
    } else {
      return number*9
    }
}

//outra resolução com tenario: 

const  simpleMultiplication = number => (number % 2) ? number*9 : number*8

//outra:

function simpleMultiplication(number){
    return number % 2 == 0 ? number * 8 : number * 9
  }