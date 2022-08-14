import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const runBattles = (battles: Battle[]) =>
  battles.map((battle) => battle.fight());

const player1 = new Character('ANA');
const player2 = new Character('Pedro');
const player3 = new Character('Beatriz');

for (let i = 0; i < 500; i += 1) player1.levelUp();
// console.log(player1.lifePoints);
const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
