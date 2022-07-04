// par ou impar

// instruções

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


// resolução 

function even_or_odd(number) {

    if (number % 2 == 0 || number == 2 || number == 0) {
         return 'Even'
     } else  {
         return 'Odd'
 }
 }

//resolução mais curta usando tenario: 

 const even_or_odd = number => (number % 2) ? 'Odd': 'Even' 
