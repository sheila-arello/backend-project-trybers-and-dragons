import Battle, { PVP } from './Battle';
import Character from './Character';

const fight = (battle: Battle) => battle.fight();

const player1 = new Character('ANA');
console.log(player1.race.maxLifePoints);
console.log(player1.lifePoints);
for (let i = 0; i < 500; i += 1) player1.levelUp();
console.log(player1.lifePoints);
const player2 = new Character('PEDRO');
console.log(player2.race.maxLifePoints);
console.log(player2.lifePoints);
const pvp1 = new PVP(player1, player2);
console.log(fight(pvp1));
// const player3 = new Character('');
// for (let i = 0; i < 500; i += 1) player3.levelUp();
// const player4 = new Character('');
// const pvp2 = new PVP(player4, player3);
// console.log(pvp1);
// console.log(pvp2);
// console.log(fight(pvp1));
  
// const result = [fight(pvp1), fight(pvp2)];
// console.log(result);
