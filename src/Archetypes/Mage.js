"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Mage extends Archetype_1.default {
    constructor(name) {
        super(name);
        Mage._archetypeInstancesCount += 1;
        this._energy = 'mana';
    }
    static createdArchetypeInstances() {
        return this._archetypeInstancesCount;
    }
    get energyType() {
        return this._energy;
    }
}
exports.default = Mage;
Mage._archetypeInstancesCount = 0;
