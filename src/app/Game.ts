import { Player } from './Player';
import { Team } from './Team';

export class Game {
  public Name: string;
  public Teams: Team[];
  public SetIndex: number;
  public ServiceIndex: number = 0;

  constructor() {
    this.Name = this.getDateAsString(new Date());
    this.Teams = [new Team(), new Team()];
    this.SetIndex = 0;
  }

  pad2(n: number) {
    return n < 10 ? '0' + n : n;
  }
  getDateAsString(date: Date) {
    return (
      date.getFullYear().toString() +
      this.pad2(date.getMonth() + 1) +
      this.pad2(date.getDate()) +
      this.pad2(date.getHours()) +
      this.pad2(date.getMinutes()) +
      this.pad2(date.getSeconds())
    );
  }
}
