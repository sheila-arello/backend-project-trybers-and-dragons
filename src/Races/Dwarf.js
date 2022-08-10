"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Dwarf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 80;
        Dwarf._racesInstancesCount += 1;
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
exports.default = Dwarf;
Dwarf._racesInstancesCount = 0;
// const dwarf1 = new Dwarf('teste', 3, 88);
// console.log(dwarf1.maxLifePoints);
