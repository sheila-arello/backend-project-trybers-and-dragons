import Battle, { PVP } from './Battle';
import Character from './Character';

const fight = (battle: Battle) => battle.fight();

const player1 = new Character('ANA');
for (let i = 0; i < 500; i += 1) player1.levelUp();
const player2 = new Character('PEDRO');
const pvp1 = new PVP(player1, player2);

// const player3 = new Character('');
// for (let i = 0; i < 500; i += 1) player3.levelUp();
// const player4 = new Character('');
// const pvp2 = new PVP(player4, player3);
console.log(pvp1);
// console.log(pvp2);
console.log(fight(pvp1));
  
// const result = [fight(pvp1), fight(pvp2)];
// console.log(result);
