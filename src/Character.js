"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
const Races_1 = require("./Races");
const utils_1 = require("./utils");
class Character {
    constructor(name) {
        this.name = name;
        this.name = name;
        this._dexterity = (0, utils_1.default)(1, 10);
        this._race = new Races_1.Elf(name, this._dexterity);
        this._archetype = new Archetypes_1.Mage(name);
        this.maxLifePoints = this.race.maxLifePoints / 2;
        this._lifePoints = this.maxLifePoints;
        this._strength = (0, utils_1.default)(1, 10);
        this._defense = (0, utils_1.default)(1, 10);
        this._energy = {
            type_: this.archetype.energyType,
            amount: (0, utils_1.default)(1, 10),
        };
    }
    get race() {
        return this._race;
    }
    get archetype() {
        return this._archetype;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get strength() {
        return this._strength;
    }
    get defense() {
        return this._defense;
    }
    get dexterity() {
        return this._dexterity;
    }
    get energy() {
        const result = {
            amount: this._energy.amount,
            type_: this._energy.type_,
        };
        return result;
    }
    receiveDamage(attackPoints) {
        const damage = attackPoints - this._defense;
        if (damage > 0)
            this._lifePoints -= damage;
        if (this._lifePoints <= 0)
            this._lifePoints = -1;
        return this._lifePoints;
    }
    attack(enemy) {
        this.receiveDamage(enemy.strength);
    }
    levelUp() {
        this._dexterity += (0, utils_1.default)(1, 10);
        this.maxLifePoints += (0, utils_1.default)(1, 10);
        this._defense += (0, utils_1.default)(1, 10);
        this._strength += (0, utils_1.default)(1, 10);
        this._energy.amount = 10;
        if (this.maxLifePoints > this.race.maxLifePoints) {
            this.maxLifePoints = this.race.maxLifePoints;
        }
        this._lifePoints = this.maxLifePoints;
    }
    special() {
        this._dexterity += 10;
        this._defense += 5;
    }
}
exports.default = Character;
