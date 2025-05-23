let playlist = ["funk","hip-hop"," pop"];

console.log("Antes do shift");
console.table(playlist);

//removendo o primeiro estilo 
let estiloRmovido = playlist.shift();

console.log("Depois do shift");
console.table(playlist);

console.log("estilo removido:" + estiloRmovido);
