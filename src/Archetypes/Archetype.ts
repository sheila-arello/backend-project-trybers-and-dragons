import { EnergyType } from '../Energy';

export default abstract class Archetype {
  protected _name: string;
  protected _special: number;
  protected _cost: number;

  constructor(name: string) { 
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get energyType(): EnergyType;
}
