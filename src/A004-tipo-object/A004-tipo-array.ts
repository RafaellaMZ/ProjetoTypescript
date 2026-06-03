//Array <T> é uma forma de declarar um array genérico, onde T é um tipo genérico que pode ser substituído por qualquer tipo específico quando o array for criado. Isso permite que você crie arrays de diferentes tipos sem precisar criar uma nova classe ou interface para cada tipo específico.
//Exemplo de uso do Array <T>:

export function multiplicaArgs(...args: Array<number>): number {
    return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor);
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('a', 'b', 'c');

console.log(result); // Output: 6
console.log(concatenacao); // Output: 'abc'
