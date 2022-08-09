export default abstract class Race {
  protected _maxLifePoints: number;
  // private static _racesInstancesCount = 0;

  constructor(
    protected _name: string = '',
    protected _dexterity: number = 0,
  ) { 
    this._maxLifePoints = 0;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints(): number;
}
