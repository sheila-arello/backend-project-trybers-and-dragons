"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Fighter, { SimpleFighter } from '../Fighter';
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(player1, monsters) {
        super(player1);
        this.player1 = player1;
        this.monsters = monsters;
        this.monsters = monsters;
    }
    monstersLifeEnds() {
        const legion = this.monsters.map((monster) => {
            if (monster.lifePoints === -1)
                return true;
            return false;
        });
        return (legion.every((leg) => leg === true));
        // return false;
    }
    // Should return 1 if player wins, -1 otherwise
    fight() {
        while (this.player.lifePoints > 0 && !this.monstersLifeEnds()) {
            // this.player.attack(this.player2);
            this.monsters.map((monster) => monster.attack(this.player));
        }
        return (this.player.lifePoints === -1) ? -1 : 1;
    }
}
exports.default = PVE;
