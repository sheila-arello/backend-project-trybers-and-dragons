import SimpleFighter from './Fighter/SimpleFighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  protected _strength: number;

  constructor() {
    // this.name = name;
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    // const damage = this._lifePoints - attackPoints;
    // if (damage > 0) this._lifePoints -= damage;
    this._lifePoints -= attackPoints;
    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    console.log(`Monster antes do ataque: ${this._lifePoints}`);
    console.log(`Enemy strength: ${enemy.strength}`);
    this.receiveDamage(enemy.strength);
    console.log(`Monster depois do ataque: ${this._lifePoints}`);
  }
}