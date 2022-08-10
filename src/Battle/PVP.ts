import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(protected player1: Fighter, protected player2: Fighter) { 
    super(player1);
    this.player2 = player2;
  }
  // se super.fight() retornar 1 o player quer foi usado como parâmetro do super na inicialização
  // ganhou, e se retornar -1 a vitória foi do player que não foi o parâmetro do super;

  fight(): number {
    while (this.player.lifePoints > 0 && this.player2.lifePoints > 0) { 
      this.player.attack(this.player2);
      this.player2.attack(this.player);
    }
    return (this.player2.lifePoints === -1) ? 1 : -1;
  }
}
