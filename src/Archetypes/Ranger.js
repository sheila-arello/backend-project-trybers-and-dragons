"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Ranger extends Archetype_1.default {
    constructor(name) {
        super(name);
        Ranger._archetypeInstancesCount += 1;
        this._energy = 'stamina';
    }
    static createdArchetypeInstances() {
        return this._archetypeInstancesCount;
    }
    get energyType() {
        return this._energy;
    }
}
exports.default = Ranger;
Ranger._archetypeInstancesCount = 0;
