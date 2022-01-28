import { Player } from './Player';
import { Team } from './Team';

export class Game {
  public Teams: Team[];
  public SetIndex: number;
  public ServiceIndex: number = 0;

  constructor() {
    this.Teams = [new Team(), new Team()];
    this.Teams[0].Players = [
      new Player('Edu', 'Eduardo'),
      new Player('Diego', 'Diego P'),
    ];
    this.Teams[1].Players = [
      new Player('Javi', 'Javi N'),
      new Player('Juan', 'Juan N' ),
    ];
    this.SetIndex = 0;
  }
}
