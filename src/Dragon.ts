import { SimpleFighter } from './Fighter';
import Monster from './Monster';

export default class Dragon extends Monster implements SimpleFighter {
  protected _lifePoints: number;

  constructor() {
    super();
    this._lifePoints = 999;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }
}