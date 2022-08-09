import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _archetypeInstancesCount = 0;
  private _energy: EnergyType;

  constructor(name: string) { 
    super(name);
    Necromancer._archetypeInstancesCount += 1;
    this._energy = 'mana';
  }

  public static createdArchetypeInstances(): number {
    return this._archetypeInstancesCount;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}
