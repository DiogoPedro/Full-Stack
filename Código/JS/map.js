const livros = ["CSS3", "JavaScript", "React", "PHP"]
let livros1 = livros.map( (livro) => "Livro " + livro)
let livros2 = livros.map( (livro, index) => "Livro[" + index + "]: " + livro)

console.log(livros)
console.log(livros1)
console.log(livros2)