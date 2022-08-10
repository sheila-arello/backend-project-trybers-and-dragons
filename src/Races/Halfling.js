"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Halfling extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 60;
        Halfling._racesInstancesCount += 1;
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
exports.default = Halfling;
Halfling._racesInstancesCount = 0;
