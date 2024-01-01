// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in onderstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================
// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]

console.log('Opdracht 1');//
const names = ["Henk", "Piet", "Fred", "Joop"];
for( let n = 0; n<names.length; n++)
{
    console.log(names[n]+'je');
}

console.log('');
// ==========================================
// Opdracht 2
// Schrijf een script dat ieder EVEN getal in onderstaande array met 2 vermenigvuldigd, en ieder ONEVEN getal met 3
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 4, 8, 15, 87, 76 ];

const numbers = [2, 4, 5, 29, 38];
console.log(numbers);

for(let n = 0; n< numbers.length; n++ )
{
    if(numbers[n]%2 ===0 )// the modulus of even numbers is equal to 0
    {
        numbers[n] = numbers[n]*2;
    }
    else
    {
        numbers[n] = numbers[n]*3;
    }
}
console.log(numbers);
console.log('');
// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array, het volume uitrekent.
// Het volume van een vierkant is Lengte x Breedte x Hoogte
// Vervolgens moet de huidige waarde in de array overschreven worden met: "Het volume van [a] is [b]"
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================


// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(squares) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(squares) geeft:
// [
//   'Het volume van 30 is 27000',
//   'Het volume van 2 is 8',
//   'Het volume van 8 is 512',
//   'Het volume van 24 is 13824',
//   'Het volume van 11 is 1331'
// ]
const squares = [30, 2, 8, 24, 11];
console.log(squares);
let zin = null;

for(let n= 0; n < squares.length; n++)
{
    zin = 'Het volume van '+squares[n]+' is ';
    squares[n] =  Math.pow(squares[n],3);//het volume van een kubus is lengte van een zijde tot de 3e macht (oftewwel x^3).
    squares[n] = zin + squares[n];
}
console.log(squares);


