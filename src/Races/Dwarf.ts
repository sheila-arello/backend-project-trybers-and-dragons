import Race from './Race';

export default class Dwarf extends Race {
  private static _racesInstancesCount = 0;

  constructor(name: string, dexterity: number) { 
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._racesInstancesCount += 1;  
  }

  public set maxLifePoints(points: number) {
    this._maxLifePoints = points;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this._racesInstancesCount;
  }
}

// const dwarf1 = new Dwarf('teste', 3, 88);
// console.log(dwarf1.maxLifePoints);