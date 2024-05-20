const reteta = {
    titlu: "Tiramisu",
    portii: 6,
    ingrediente: ["piscoturi", "mascarpone", "oua", "zahar", "cafea"]
};

console.log("Titlu: " + reteta.titlu);
console.log("Porții: " + reteta.portii);
console.log("Ingrediente: " + reteta.ingrediente.join(", "));

//Metoda join în JavaScript este utilizată pentru a combina toate elementele unui array într-un singur șir de caractere, separându-le cu un separator specificat (virgula).