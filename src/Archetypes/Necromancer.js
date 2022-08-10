"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Necromancer extends Archetype_1.default {
    constructor(name) {
        super(name);
        Necromancer._archetypeInstancesCount += 1;
        this._energy = 'mana';
    }
    static createdArchetypeInstances() {
        return this._archetypeInstancesCount;
    }
    get energyType() {
        return this._energy;
    }
}
exports.default = Necromancer;
Necromancer._archetypeInstancesCount = 0;
