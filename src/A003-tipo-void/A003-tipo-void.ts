function semRetorno(...args: string[]) : void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Rafaella',
    sobrenome: 'Lima',

    exibirNome() : void {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};

semRetorno('Rafaella', 'Lima');
pessoa.exibirNome();

export {pessoa}
