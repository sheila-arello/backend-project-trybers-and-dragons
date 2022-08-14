import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected player1: Fighter,
    protected monsters: (Fighter | SimpleFighter)[],
  ) { 
    super(player1);
    this.monsters = monsters;
  }

  private monstersLifeEnds(): number {
    // Retorna 0 se todos mortos ou > 0 se existe algum vivo
    const legion = this.monsters
      .filter((monster) => (monster.lifePoints > 0));
    return legion.length;
  }

  attackEachOther() {
    this.monsters.map((monster) => {
      if (monster.lifePoints > 0) {
        monster.attack(this.player);
        this.player.attack(monster);
      }
      return null;
    });
  }

  // Should return 1 if player wins, -1 otherwise
  fight(): number {
    while (this.player.lifePoints > 0 && this.monstersLifeEnds() > 0) { 
      this.attackEachOther();
    }
    return (this.player.lifePoints === -1) ? -1 : 1;
  }
}
