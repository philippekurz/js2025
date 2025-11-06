// bases.js

// console.log() : Affichage dans la console
console.log('Bonjour le monde!');

// Déclaration d'une variable
// On demande à l'interpréteur JS de réserver un espace mémoire sous le nom "nombre" pour stocker une valeur (42)
let nombre = 42;    // Variable numerique
console.log(nombre);

let texte = 'Salut'; // Variable texte (chaîne de caractères, délimitée par des guillemets simples ou doubles)
console.log(texte);

// Types de données de base en JavaScript
let decimal = 3.14; // Nombre à virgule flottante
console.log(decimal);

let booleen = true; // Valeur booléenne (true ou false)
console.log(booleen);

let nul = null; // Valeur nulle
console.log(nul);

let indefini; // Variable non définie (undefined)    
console.log(indefini);   


// Javascript est faiblement typé, comme php, contraierement à d'autres langages comme le C ou le Java qui sont fortement typés.
// Test de changement de type
let variable = 10; // Type défini par la valeur assignée
console.log(variable); // Affiche 10
variable = "Bonjour"; // Affectation d'une chaîne de caractères
console.log(variable); // Affiche "Bonjour"
variable = false; // Affectation d'une valeur booléenne
console.log(variable); // Affiche false

// Constantes
const PI = 3.14159; // Déclaration d'une constante
console.log(PI);

// Operateurs de base
// = : affectation
let a = 5;
let b = 'texte';
a = 6; // Réaffectation de la variable a
a = b; // a prend la valeur de b (changement de type possible en JS)

// + : addition ou concaténation
let c = a + 5; // Addition
console.log(c); // Affiche 11
let d = b + ' monde'; // Concaténation
console.log(d); // Affiche "texte monde"
let g = 'Le nombre est : ' + a; // Concaténation avec un nombre
console.log(g); // Affiche "Le nombre est : 6"

// - , * , / : soustraction, multiplication, division
let e = a - 2; // Soustraction
console.log(e);
let f = a * 2; // Multiplication
console.log(f);
let h = a / 2; // Division
console.log(h);

// % : modulo (reste de la division entière)
let i = a % 4; // Reste de la division de a par 4
console.log(i); // Affiche 2