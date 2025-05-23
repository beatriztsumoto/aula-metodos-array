let playlist = ['Funk', 'Hip-Hop', 'Pop'];

console.log("Antes do pop:", playlist);
console.table(playlist);

// Removendo a última música da playlist
let estiloremovido = playlist.pop();

console.log("Depois do pop:", playlist);
console.table(playlist);

console.log("Estilo removido:", estiloremovido);