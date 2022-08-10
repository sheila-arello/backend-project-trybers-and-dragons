"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Monster {
    constructor() {
        // this.name = name;
        this._lifePoints = 85;
        this._strength = 63;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get strength() {
        return this._strength;
    }
    receiveDamage(attackPoints) {
        const damage = this._lifePoints - attackPoints;
        if (damage > 0)
            this._lifePoints -= damage;
        if (this._lifePoints <= 0)
            this._lifePoints = -1;
        return this._lifePoints;
    }
    attack(enemy) {
        this.receiveDamage(enemy.strength);
    }
}
exports.default = Monster;
