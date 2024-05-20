function eliminaProprietate(obiect, proprietate) {
    // Creăm o copie a obiectului numita obiectNou folosind spread operatorul (...obiect)
    const obiectNou = { ...obiect };
    
    // Ștergem proprietatea specificată din noul obiect cu operatorul delete
    delete obiectNou[proprietate];
    
    // Returnăm noul obiect fără proprietate
    return obiectNou;
}

//Input: obiect = { a: 1, b: 2 }, proprietate = “b”
const obiect = { a: 1, b: 2 };
const proprietate = "b";
const rezultatFunctie = eliminaProprietate(obiect, proprietate);
console.log(rezultatFunctie); 
 // Output: { a: 1 }
