//primitivni
//number
let godine:number = 25;

//string
let ime:string="teodora";

//boolean
let studira:boolean = true;

//kompleksni
//niz stringa
let predmeti:string[]=["epos","cloud","klijenti","spa"];

//niz numbera
let ocene:number[]=[10,9,8];

//tuples-uredjena ntorka
let ntorka:[string,number]=["tea",20];

//enum
enum Moduli{
    TehnologijeElektronskogPoslovanja,
    InformacioniSisitemi,
    InformacioneTehnologije
}

let konkretniModul:Moduli=Moduli.TehnologijeElektronskogPoslovanja;

//objekti
let student:{ime:string,godine:number,studira:boolean}={
    ime:"tea",
    godine:20,
    studira:true
};

//unija tipova
let brojIliString:number|string=10;

//any tip
let biloSta:any="Ovo je bilo sta";

//void
function sayHello():void{
    console.log("Hello");
}

//null i undefined
let n:null=null;
let u:undefined=undefined;

//type assertions
let nekaVrednost:any = "ovo je nesto";
let duzina:number=(nekaVrednost as String).length;

console.log(godine,ime,studira);
console.log(predmeti,ocene);
console.log(ntorka);
console.log(konkretniModul);
console.log(student);
console.log(brojIliString);
console.log(biloSta);
console.log(n,u);
console.log(duzina);



