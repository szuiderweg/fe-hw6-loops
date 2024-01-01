// ==========================================
// Opdracht 1. Maak een for loop die het volgende patroon in de terminal print:
// Verwachte uitkomsten:
// *
// **
// ***
// ****
// *****

// Tip: je kunt de .repeat() methode gebruiken om een karakter een n aantal keer te herhalen...
// Dit heb je nog niet geleerd, maar bekijk hiervoor dit MDN-artikel eens: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// ==========================================
for (let n = 1; n <= 5; n++){
    console.log('*'.repeat(n));
}


// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de laatste (vijfde) loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
// ==========================================
console.log('');//witregel na vorige opdracht
for(let n = 1;n <=5 ;n++){
    if (n <= 4)
    {
        console.log('loop...');
    }
    else if(n===5)
    {
        console.log('klaar');
    }
}

// ==========================================
// Opdracht 3: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================
console.log('');//witregel na vorige opdracht

let uit = null;

for(let n=0; n<=9; n++)
{
    if (n<3) {
        uit = n.toString();

    }
    else if(n>=3 && n<6)
    {
        uit = '>'+ n.toString();
    }
    else
    {
        uit = '>>'+n.toString();
    }
    console.log(uit);
}




// ==========================================
// Opdracht 4 (BONUS): schrijf een for-loop die van 0 tot 100 loopt en de getallen print.
// Echter, voor veelvouden van 3 print je "Fizz" in plaats van het nummer, en voor veelvouden van 5 print je "Buzz".
// Voor getallen die zowel een veelvoud van 3 als van 5 zijn, print je "FizzBuzz"
// Verwachte uitkomsten:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.
// ==========================================
console.log('');//witregel na vorige opdracht

let fizz = null;//initialiseer booleans voor de lus
let buzz = null;

for(let n = 1; n<=100 ;n++)//doe een lus voor getal n = 1 tot en met 100
{   //test deelbaar door 3 en 5
    fizz = n%3 ===0;
    buzz = n%5 ===0;

    if(fizz && !buzz)//deelbaar door 3, maar niet 5
    {
        console.log('Fizz');
    }
    else if(!fizz && buzz)//deelbaar door 5, maar niet 3
    {
        console.log('Buzz');
    }
    else if(fizz && buzz)//deelbaar door 3 en 5
    {
        console.log('FizzBuzz');
    }
    else// print waarde van n voor de overige gevallen
    {
        console.log(n.toString());
    }
}