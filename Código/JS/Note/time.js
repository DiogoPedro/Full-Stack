var hoje = new Date();
var tomorrow = new Date(2020, 4, 26);

console.log(hoje.getFullYear());
console.log(hoje.getMonth());
console.log(hoje.getDate());
console.log(hoje.getDay());
console.log(hoje.getHours());
console.log(hoje.getUTCHours());
console.log(hoje.toUTCString());
console.log(hoje.toLocaleDateString()); 
console.log(hoje.toLocaleTimeString());
console.log(hoje.toISOString());