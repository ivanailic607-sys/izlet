let ime = prompt("Unesi svoje ime:");
let cijenaUlaznice = Number(prompt("Unesi cijenu jedne ulaznice:"));
let brojUlaznica = Number(prompt("Unesi broj ulaznica:"));
let budzet = Number(prompt("Unesi svoj budzet:"));


let ukupanIznos = cijenaUlaznice * brojUlaznica;
let preostaliIznos = budzet - ukupanIznos;

let dovoljnoNovca = budzet >= ukupanIznos;
let tocanIznos = budzet === ukupanIznos;


let nastavakPlaniranja = confirm("Zelis li nastaviti s planiranjem izleta?");

alert("Ime: " + ime +
      "\nUkupni trosak: " + ukupanIznos + " EUR" +
      "\nPreostali iznos: " + preostaliIznos + " EUR" +
      "\nDovoljno novca: " + dovoljnoNovca +
      "\nTocan iznos: " + tocanIznos +
      "\nNastavak planiranja: " + nastavakPlaniranja);