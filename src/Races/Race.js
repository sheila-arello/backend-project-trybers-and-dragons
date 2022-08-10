"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Race {
    // private static _racesInstancesCount = 0;
    constructor(_name = '', _dexterity = 0) {
        this._name = _name;
        this._dexterity = _dexterity;
        this._maxLifePoints = 0;
    }
    get name() {
        return this._name;
    }
    get dexterity() {
        return this._dexterity;
    }
    static createdRacesInstances() {
        throw new Error('Not implemented');
    }
}
exports.default = Race;
