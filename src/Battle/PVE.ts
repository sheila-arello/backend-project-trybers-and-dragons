import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected player1: Fighter,
    // protected monsters: Fighter[] | SimpleFighter[],
    protected monsters: (Fighter | SimpleFighter)[],
  ) { 
    super(player1);
    this.monsters = monsters;
  }

  private monstersLifeEnds(): boolean {
    // const legion = this.monsters.map((monster) => {
    //   if (monster.lifePoints === -1) return true;
    //   return false;
    // });
    // return (legion.every((leg) => leg === true));
    const legion = this.monsters
      .filter((monster) => (monster.lifePoints > 0));
    console.log(legion);
    return !legion;
  }

  // Should return 1 if player wins, -1 otherwise
  fight(): number {
    // while (this.player.lifePoints > 0 && !this.monstersLifeEnds()) { 
    //   this.monsters.map((monster) => {
    //     monster.attack(this.player);
    //     this.player.attack(monster);

    //     return null;
    //   });
    // }
    return (this.player.lifePoints === -1) ? -1 : 1;
  }
}
