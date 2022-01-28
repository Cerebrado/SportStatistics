import { Player } from './Player';
import { Team } from './Team';

export class Game {
  public Name: string;
  public Teams: Team[];
  public SetIndex: number;
  public ServiceIndex: number = 0;

  constructor() {
    this.Name = Date.now.toString();
    this.Teams = [new Team(), new Team()];
    this.SetIndex = 0;
  }
}
