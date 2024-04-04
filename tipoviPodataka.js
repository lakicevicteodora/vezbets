//primitivni
//number
var godine = 25;
//string
var ime = "teodora";
//boolean
var studira = true;
//kompleksni
//niz stringa
var predmeti = ["epos", "cloud", "klijenti", "spa"];
//niz numbera
var ocene = [10, 9, 8];
//tuples-uredjena ntorka
var ntorka = ["tea", 20];
//enum
var Moduli;
(function (Moduli) {
    Moduli[Moduli["TehnologijeElektronskogPoslovanja"] = 0] = "TehnologijeElektronskogPoslovanja";
    Moduli[Moduli["InformacioniSisitemi"] = 1] = "InformacioniSisitemi";
    Moduli[Moduli["InformacioneTehnologije"] = 2] = "InformacioneTehnologije";
})(Moduli || (Moduli = {}));
var konkretniModul = Moduli.TehnologijeElektronskogPoslovanja;
//objekti
var student = {
    ime: "tea",
    godine: 20,
    studira: true
};
//unija tipova
var brojIliString = 10;
//any tip
var biloSta = "Ovo je bilo sta";
//void
function sayHello() {
    console.log("Hello");
}
//null i undefined
var n = null;
var u = undefined;
//type assertions
var nekaVrednost = "ovo je nesto";
var duzina = nekaVrednost.length;
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(ntorka);
console.log(konkretniModul);
console.log(student);
console.log(brojIliString);
console.log(biloSta);
console.log(n, u);
console.log(duzina);
