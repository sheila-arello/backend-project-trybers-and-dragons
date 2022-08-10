import Archetype, { Mage } from './Archetypes';
import Energy, { EnergyType } from './Energy';
import { SimpleFighter } from './Fighter';
import Fighter from './Fighter/Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _race: Race;
  private _archetype: Archetype;
  private maxLifePoints: number;
  private _dexterity: number;
  private _energy: {
    amount: number,
    type_: EnergyType,
  };

  constructor(public name: string) {
    this.name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this.maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    const result = {
      amount: this._energy.amount,
      type_: this._energy.type_,
    };
    return result;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    this.receiveDamage(enemy.strength);
  }
  
  levelUp(): void {
    this._dexterity += getRandomInt(1, 10);
    this.maxLifePoints += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this.maxLifePoints > this.race.maxLifePoints) {
      this.maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this.maxLifePoints;
  }

  special(): void {
    this._dexterity += 10;
    this._defense += 5;
  }
}