import { Player } from './Player';
import { Team } from './Team';

export class Game {
  public Teams: Team[];
  public SetIndex: number;
  public ServiceIndex: number = 0;

  constructor() {
    this.Teams = [new Team(), new Team()];
    this.Teams[0].Players = [
      new Player('Edu', 'Eduardo', 'green', 0),
      new Player('Diego', 'Diego P', 'green', 1),
    ];
    this.Teams[1].Players = [
      new Player('Javi', 'Javi N', 'blue', 2),
      new Player('Juan', 'Juan N', 'blue', 3),
    ];
    this.SetIndex = 0;
  }
}
