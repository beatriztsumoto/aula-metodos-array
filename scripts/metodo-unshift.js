let playlist = ["funk","hip-hop","pop"];

console.log("Antes do unshift");
console.table(playlist);

// Adiciona um novo estilo no início da playlist
playlist.unshift("Rock");

console.log("Depois do unshift");
console.table(playlist);
