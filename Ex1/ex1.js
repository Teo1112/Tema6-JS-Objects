function creeazaReteta(titlu, portii, ingrediente) {
    const reteta = {
        titlu: titlu,
        portii: portii,
        ingrediente: ingrediente
    };

    console.log("Titlu: " + reteta.titlu);
    console.log("Porții: " + reteta.portii);
    console.log("Ingrediente: " + reteta.ingrediente.join(", "));
    
    return reteta;
}

const titlu = "Tiramisu";
const portii = 6;
const ingrediente = ["piscoturi", "mascarpone", "oua", "zahar", "cafea"];
const retetaTiramisu = creeazaReteta(titlu, portii, ingrediente);
