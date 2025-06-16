// Trabalhando com array
// 1° Forma: objeto

let nomes = new Array();
let cisne = {};

nomes[0] = "Minos Prime";
nomes[1] = "Santos DuMonte";
nomes[2] = "Solid Snake";
nomes[3] = "Getulio VArgas";
nomes[4] = "Dave Doidão";
nomes[5] = "MMs";
// demonstrar elemento individual


//document.writeln(`nome: ${nomes[2]}`);
//document.writeln("<p>nome: " + nomes[2]+ "</p>");


//loop
nomes.forEach(element => {
    document.writeln( "<p> nome: " + element + "</p>");   
});

document.writeln("<hr>");
//contar quantos elementos tem o array

let qtArt = nomes.length;
document.writeln(`Total: ${qtArt}`);

for(i = 0 ; i < nomes.length; i++){
    document.writeln(`<p> Nomes: ${nomes[i]} </p>`);
}

// 2 forma 

let filmes =[
     "Minecraft O filme",
     "Homem Aranha: sem casa",
     "Pizza tower o filme(By Adam Sandler)",
     "Gente pequena 30px: O inimigo agora é outro",
     "Princesildo Sofio 2",
     "CALABRESO: A volt a dos amoxtradinhos"
]

document.writeln("<hr>");

filmes.map((godofredo)=>{
    document.writeln(`<p>${godofredo}</p>`);
})

// 3° Forma

document.writeln("<hr>");

let Free = [];
Free[0] = "ahh. free, at last...";
Free[1] =  "O Gabriel... now dawns thy reckoning,";
Free[2] = "and thy gore shall glisten";
Free[3] = " before the temples of man! ";
Free[4] = "Creature of steel";
Free[5] = " my gratitude upon thee for my freedom";
Free[6] = "But the crimes thy kind have committed against humanity";
Free[7] = "are not forgotten!";
Free[8] = "And thy punishment...";
Free[9] = "is death!";

for (const key in Free) {
   document.writeln(`<p>${Free[key]}</p>`);
}

document.writeln("<hr>");

const Ntitanic = [4];
titanic[0] = 1.9;
titanic[1] = 3.9;
titanic[2] = 8;
titanic[3] = 10;
titanic[4] = 11;

for (const key in Ntitanic) {
   document.writeln(`<p>${Ntitanic[key]}</p>`);
}