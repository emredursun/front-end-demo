const banner =
   document.getElementById("banner")

banner.style.backgroundColor = "green"
let a = 3;
if (a > 0) {
    functionCall1();
} else {
    functionCall2();
}

for (let i = 0; i < 10; i++){
    console.log(i);
}

// Immutable, like Java's final
const numberOne = 1;

// Mutable, most like Java's variables
let numberTwo = 2;

// Also mutable, not preferred
var numberThree = 3;

function foobar(a, b, c) {
    return (a + b) * c;
 }
 

 let favoriteNumber = 7;
favoriteNumber = "seven";

// Dynamic types - no need to cast
// Great way to switch between text and numerical representations!
