"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(player1, player2) {
        super(player1);
        this.player1 = player1;
        this.player2 = player2;
        this.player2 = player2;
    }
    // se super.fight() retornar 1 o player quer foi usado como parâmetro do super na inicialização
    // ganhou, e se retornar -1 a vitória foi do player que não foi o parâmetro do super;
    fight() {
        while (this.player.lifePoints > 0 && this.player2.lifePoints > 0) {
            this.player.attack(this.player2);
            this.player2.attack(this.player);
        }
        return (this.player2.lifePoints === -1) ? 1 : -1;
    }
}
exports.default = PVP;
