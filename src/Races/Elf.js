"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Elf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 99;
        Elf._racesInstancesCount += 1;
    }
    set maxLifePoints(points) {
        this._maxLifePoints = points;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    static createdRacesInstances() {
        return this._racesInstancesCount;
    }
}
exports.default = Elf;
Elf._racesInstancesCount = 0;
