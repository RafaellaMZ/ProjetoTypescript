/* eslint-disable */
// Tipos básicos (aqui ocorre a inferência de tipos)
let nome: string = "João"; // Qualquer tipo de strings: ' "" ``
let idade: number = 30; // Qualquer tipo de número: 10, 10.5, -5
let adulto:boolean = true; // true ou false
let simbolo: symbol = Symbol("simbolo"); // Symbols são únicos e imutáveis
let bigInt: bigint = BigInt(10); // Para números inteiros muito grandes

//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5]; // Array de números
let arrayDeStrings: string[] = ["a", "b", "c"]; // Array de strings
let arrayDeBooleanos: boolean[] = [true, false, true]; // Array de booleanos

// Objetos
let pessoa: { nome: string; idade: number, adulto?: boolean } = {
    nome: "Maria",
    idade: 25,
    adulto: false
};

console.log(pessoa.nome); // Acessando a propriedade nome
console.log(pessoa.idade); // Acessando a propriedade idade
console.log(pessoa.adulto); // Acessando a propriedade adulto (opcional)

// Funções
function somar(a: number, b: number): number {
    return a + b;
}
