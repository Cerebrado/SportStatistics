import { Player } from './Player';

export class Team {
  public Players: Player[];
  public SetScore: number[];
  public GameCounting: number;
  public GameScoreDisplay: string;
  constructor() {
    this.Players = new Array<Player>();
    this.SetScore = new Array<number>();
  }
}
