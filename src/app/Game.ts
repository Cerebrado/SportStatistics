import { Team } from './Team';

export class Game {
 
  public Teams: Team[];
  public Finalized: boolean
  public SetIndex: number;
  public ServiceIndex: number = 0;
  public Name:string;

  private _date: Date;
  get Date(): Date {
    return this._date;
  }
  set Date(value: Date) {
    this._date = value;
    this.Name = this.getDateAsString(value) ;
  }

  constructor() {
    this.Date = new Date();

    this.Teams = [new Team(), new Team()];
    this.SetIndex = 0;
  }

  pad2(n: number) {
    return n < 10 ? '0' + n : n;
  }
  getDateAsString(date: Date) {
    return (
      date.getFullYear().toString() + '-' +
      this.pad2(date.getMonth() + 1) + '-' +
      this.pad2(date.getDate()) + ' ' +
      this.pad2(date.getHours()) + ':' +
      this.pad2(date.getMinutes()) + ':' +
      this.pad2(date.getSeconds()) 
    );
  }
}
