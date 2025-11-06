let a = 23

// a % 2 = le reste de la division de a par 2. Ici, le reste = 1 donc a est impair
// Comparaison de deux valeurs avec l'opérateur ==
// les {} délimitent un bloc de code
if (a % 2 == 0) 
{
    console.log(a + " est un nombre pair.");
}
else
{
    console.log(a + " est un nombre impair.");
}

// Ecrire un programme qui indique si quelqu'un est majeur ou mineur en fonction de son âge

// On définit l'âge (tu peux changer la valeur pour tester)
let age = 17;

// Vérification avec une structure if
if (age >= 18) {
  console.log("La personne est majeure.");
} else {
  console.log("La personne est mineure.");
}

if (age >= 18)
    console.log("Cette personne est majeure.");
else
    console.log("Cette personne est mineure.");


age = 18;
let nationalite = 'française';

if (nationalite == 'française') {
    if (age >= 18)
        console.log("Cette personne est majeure.");
    else
        console.log("Cette personne est mineure.");
}
else if (nationalite == 'belge') {
    if (age >= 19)
        console.log("Cette personne est majeure.");
    else
        console.log("Cette personne est mineure.");
}
else if (nationalite == 'suisse') {
    if (age >= 17)
        console.log("Cette personne est majeure.");
    else
        console.log("Cette personne est mineure.");
}
else {
    console.log("Nationalité non prise en charge.");
}

