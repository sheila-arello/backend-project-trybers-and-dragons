"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Orc extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 74;
        Orc._racesInstancesCount += 1;
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
exports.default = Orc;
Orc._racesInstancesCount = 0;
