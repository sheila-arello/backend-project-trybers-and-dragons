abstract class Race {
  // private static count: number;
  private _maxLifePoints: number;

  constructor(
    private readonly _name: string = '',
    private readonly _dexterity: number = 0,
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

export default Race;
