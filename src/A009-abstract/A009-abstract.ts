export abstract class Personagem {
    protected abstract emoji: string;

    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number
    ) {}

    atacar (personagem: Personagem) {
    this.bordao();
    personagem.perderVida(this.ataque);
}

perderVida (forcaAtaque: number) : void {
    console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`)
    this.vida -= forcaAtaque;
}

abstract bordao() : void;
}

export class Guerreira extends Personagem{
    protected emoji = '\u{1F9DD}';

    bordao() : void {
        console.log(`${this.emoji} Eu sou a guerreira mais forte do mundo!`);
    }
}
export class Monstro extends Personagem{
    protected emoji = '\u{1F9DF}';

    bordao() : void {
        console.log(`${this.emoji} Eu sou o monstro mais assustador do mundo!`);
    }
}

const guerreira = new Guerreira('Xena', 100, 500);
const monstro = new Monstro('Hidra', 50, 300);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
